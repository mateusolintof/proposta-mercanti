"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useMemo } from "react";
import ElegantNetwork from "./ElegantNetwork";
import { useMediaQuery } from "@/lib/useMediaQuery";

function WebGLContextGuard({
  onLost,
  onRestored,
}: {
  onLost: () => void;
  onRestored: () => void;
}) {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleLost = (event: Event) => {
      event.preventDefault();
      onLost();
    };

    const handleRestored = () => {
      onRestored();
    };

    canvas.addEventListener("webglcontextlost", handleLost, { passive: false });
    canvas.addEventListener("webglcontextrestored", handleRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleLost);
      canvas.removeEventListener("webglcontextrestored", handleRestored);
    };
  }, [gl, onLost, onRestored]);

  return null;
}

export default function Scene() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleContextLost = useCallback(() => {
    // Context lost - could add fallback here if needed
  }, []);

  const handleContextRestored = useCallback(() => {
    // Context restored
  }, []);

  const quality = useMemo(() => {
    if (!isDesktop) {
      return {
        dpr: [1, 1.5] as [number, number],
        particleCount: 90,
        connectionDistance: 2.2,
        speed: 0.00035,
      };
    }

    return {
      dpr: [1, 2] as [number, number],
      particleCount: 150,
      connectionDistance: 2.5,
      speed: 0.0005,
    };
  }, [isDesktop]);

  return (
    <Canvas
      className="h-full w-full"
      dpr={quality.dpr}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 8], fov: 60 }}
    >
      <Suspense fallback={null}>
        <WebGLContextGuard
          onLost={handleContextLost}
          onRestored={handleContextRestored}
        />
        <color attach="background" args={["#02040A"]} />
        <ElegantNetwork
          particleCount={quality.particleCount}
          connectionDistance={quality.connectionDistance}
          speed={quality.speed}
        />
        <ambientLight intensity={0.3} />
      </Suspense>
    </Canvas>
  );
}
