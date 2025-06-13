/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

const waveVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
}
`;

const waveFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

const int OCTAVES = 8;
float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < OCTAVES; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p - fbm(p + fbm(p2)));
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;
  float f = pattern(uv);
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(uv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.5 * effect;
  }
  vec3 col = mix(vec3(0.0), waveColor, f);
  gl_FragColor = vec4(col, 1.0);
}
`;

// Device detection helper
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

function WaveEffect({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  enableMouseInteraction,
  mouseRadius,
}) {
  const meshRef = useRef();
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));
  const { viewport, size } = useThree();
  const rafRef = useRef();
  const timeRef = useRef(0);
  const deviceType = useRef(getDeviceType());

  // Device-specific settings
  const getDeviceSettings = () => {
    switch (deviceType.current) {
      case "mobile":
        return {
          speedMultiplier: 0.5,
          frequencyMultiplier: 0.8,
          timeMultiplier: 0.8,
          frameSkip: 2,
        };
      case "tablet":
        return {
          speedMultiplier: 0.7,
          frequencyMultiplier: 0.9,
          timeMultiplier: 0.9,
          frameSkip: 1,
        };
      default:
        return {
          speedMultiplier: 1,
          frequencyMultiplier: 1,
          timeMultiplier: 1,
          frameSkip: 0,
        };
    }
  };

  const deviceSettings = getDeviceSettings();

  // Create uniforms object
  const uniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(size.width, size.height) },
    waveSpeed: { value: waveSpeed * deviceSettings.speedMultiplier },
    waveFrequency: {
      value: waveFrequency * deviceSettings.frequencyMultiplier,
    },
    waveAmplitude: { value: waveAmplitude },
    waveColor: { value: new THREE.Color(...waveColor) },
    mousePos: { value: mousePosition },
    enableMouseInteraction: { value: enableMouseInteraction ? 1 : 0 },
    mouseRadius: { value: mouseRadius },
  };

  // Animation loop with device-specific optimization
  useEffect(() => {
    let lastTime = performance.now();
    let isActive = true;
    let frameCount = 0;

    const animate = (currentTime) => {
      if (!isActive || !meshRef.current) return;

      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Update time uniform with device-specific optimization
      timeRef.current += deltaTime * deviceSettings.timeMultiplier;
      meshRef.current.material.uniforms.time.value = timeRef.current;

      // Update other uniforms
      meshRef.current.material.uniforms.waveSpeed.value =
        waveSpeed * deviceSettings.speedMultiplier;
      meshRef.current.material.uniforms.waveFrequency.value =
        waveFrequency * deviceSettings.frequencyMultiplier;
      meshRef.current.material.uniforms.waveAmplitude.value = waveAmplitude;
      meshRef.current.material.uniforms.waveColor.value.set(...waveColor);
      meshRef.current.material.uniforms.mousePos.value.copy(mousePosition);

      // Frame skipping based on device type
      if (deviceSettings.frameSkip > 0) {
        frameCount++;
        if (frameCount % deviceSettings.frameSkip === 0) {
          rafRef.current = requestAnimationFrame(animate);
          return;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation immediately
    rafRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      isActive = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [
    waveSpeed,
    waveFrequency,
    waveAmplitude,
    waveColor,
    mousePosition,
    deviceSettings,
  ]);

  // Handle pointer events with device-specific optimization
  const handlePointerEvent = (event) => {
    if (!enableMouseInteraction) return;

    // Prevent default touch behavior
    if (event.touches) {
      event.preventDefault();
    }

    const rect = event.target.getBoundingClientRect();
    let clientX, clientY;

    if (event.touches) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;

    setMousePosition(new THREE.Vector2(x, y));
  };

  // Reset mouse position
  const resetMousePosition = () => {
    setMousePosition(new THREE.Vector2(0, 0));
  };

  return (
    <mesh
      ref={meshRef}
      scale={[viewport.width, viewport.height, 1]}
      onPointerMove={handlePointerEvent}
      onPointerDown={handlePointerEvent}
      onPointerUp={resetMousePosition}
      onPointerLeave={resetMousePosition}
      onPointerCancel={resetMousePosition}
    >
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.5, 0.5, 0.5],
  colorNum = 4,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 1,
}) {
  const deviceType = getDeviceType();

  // Device-specific DPR settings
  const getDeviceDPR = () => {
    switch (deviceType) {
      case "mobile":
        return [0.5, 1];
      case "tablet":
        return [0.75, 1.5];
      default:
        return [1, 2];
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        touchAction: "none",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{
          width: "100%",
          height: "100%",
          touchAction: "none",
          WebkitTapHighlightColor: "transparent",
        }}
        gl={{
          antialias: deviceType === "desktop",
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
          stencil: false,
          depth: false,
        }}
        dpr={getDeviceDPR()}
        frameloop="always"
        performance={{ min: deviceType === "mobile" ? 0.5 : 0.8 }}
      >
        <WaveEffect
          waveSpeed={waveSpeed}
          waveFrequency={waveFrequency}
          waveAmplitude={waveAmplitude}
          waveColor={waveColor}
          enableMouseInteraction={enableMouseInteraction}
          mouseRadius={mouseRadius}
        />
        <EffectComposer enabled={false}>
          {" "}
          {/* Disable post-processing for better performance */}
          {/* Add any post-processing effects here if needed */}
        </EffectComposer>
      </Canvas>
    </div>
  );
}
