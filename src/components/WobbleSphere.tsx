// @ts-nocheck
import React, { useRef, useEffect, useState, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { IcosahedronGeometry } from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";
import wobbleVertexShader from "../shaders/wobble/vertex.glsl";
import wobbleFragmentShader from "../shaders/wobble/fragment.glsl";
import { motion } from "framer-motion";

extend({ CustomShaderMaterial });

const Wobble = React.memo(() => {
  const scale = useScale();
  const { geometry, uniforms } = useMemo(() => createGeometryAndUniforms(), []);

  const material = useMemo(() => {
    return new CustomShaderMaterial({
      baseMaterial: THREE.MeshPhysicalMaterial,
      vertexShader: wobbleVertexShader,
      fragmentShader: wobbleFragmentShader,
      uniforms,
      metalness: 0.0,
      roughness: 0.5,
      color: "#ffffff",
      transmission: 0.0,
      ior: 1.5,
      thickness: 1.5,
      transparent: true,
      wireframe: false,
    });
  }, [uniforms]);

  const depthMaterial = useMemo(() => {
    return new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      vertexShader: wobbleVertexShader,
      uniforms,
      depthPacking: THREE.RGBADepthPacking,
    });
  }, [uniforms]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    uniforms.uTime.value = elapsedTime;
  });

  return (
    <mesh
      scale={scale}
      geometry={geometry}
      material={material}
      customDepthMaterial={depthMaterial}
      receiveShadow
      castShadow
    />
  );
});

const useScale = () => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width >= 1280) setScale(1.6);
      else if (width >= 1024) setScale(1.5);
      else if (width >= 768) setScale(1.4);
      else if (width >= 640) setScale(1.3);
      else if (width >= 500) setScale(1.1);
      else setScale(1.0);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
};

const createGeometryAndUniforms = () => {
  const geometry = new IcosahedronGeometry(2.5, 40);
  const mergedGeometry = mergeVertices(geometry);
  mergedGeometry.computeTangents();

  const uniforms = {
    uTime: { value: 0.0 },
    uPositionFrequency: { value: 0.5 },
    uTimeFrequency: { value: 0.4 },
    uStrength: { value: 0.3 },
    uWarpPositionFrequency: { value: 0.38 },
    uWarpTimeFrequency: { value: 0.12 },
    uWarpStrength: { value: 1.7 },
    uColorA: { value: new THREE.Color("#ffffff") },
    uColorB: { value: new THREE.Color("#f6f5fa") },
  };

  return { geometry: mergedGeometry, uniforms };
};


const Lights = React.memo(() => {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.castShadow = true;
      lightRef.current.shadow.mapSize.set(1024, 1024);
      lightRef.current.shadow.camera.far = 15;
      lightRef.current.shadow.normalBias = 0.05;
    }
  }, []);

  return (
    <directionalLight
      ref={lightRef}
      intensity={3}
      position={[0.25, 2, -2.25]}
    />
  );
});

type SceneProps = {
  animating: boolean;
};

const Scene: React.FC<SceneProps> = React.memo(({ animating }) => (
  <motion.div
    className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px] max-h-[800px] h-full w-full opacity-0 hidden sm:block"
    animate={{ opacity: animating ? 0 : 0.2 }}
    transition={{ ease: "easeInOut", delay: 0.5, duration: 0.2 }}
  >
    <Canvas shadows camera={{ position: [13, -3, -5], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <Lights />
      <Suspense fallback={<div></div>}>
        <Wobble />
      </Suspense>
    </Canvas>
  </motion.div>
));

export default Scene;
