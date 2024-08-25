
import React, { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { IcosahedronGeometry } from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";
import wobbleVertexShader from "../shaders/wobble/vertex.glsl";
import wobbleFragmentShader from "../shaders/wobble/fragment.glsl";
import { motion } from "framer-motion";

extend({ CustomShaderMaterial });



const Wobble = () => {
  const [geometryReady, setGeometryReady] = useState(false);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const depthMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const geometryRef = useRef<THREE.IcosahedronGeometry>(null);

  useEffect(() => {
    const geometry = new IcosahedronGeometry(2.5, 50);
    const mergedGeometry = mergeVertices(geometry);
    mergedGeometry.computeTangents();
    geometryRef.current = mergedGeometry;

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

    const material = new CustomShaderMaterial({
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

    const depthMaterial = new CustomShaderMaterial({
      baseMaterial: THREE.MeshDepthMaterial,
      vertexShader: wobbleVertexShader,
      uniforms,
      depthPacking: THREE.RGBADepthPacking,
    });

    materialRef.current = material;
    depthMaterialRef.current = depthMaterial;
    setGeometryReady(true);
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedTime;
    }
    if (depthMaterialRef.current) {
      depthMaterialRef.current.uniforms.uTime.value = elapsedTime;
    }
  });

  if (!geometryReady) return null;

  return (
    <mesh
      scale={1.6}
      geometry={geometryRef.current}
      material={materialRef.current}
      customDepthMaterial={depthMaterialRef.current}
      receiveShadow
      castShadow
    />
  );
};

const Plane = () => (
  <mesh receiveShadow rotation={[Math.PI, 0, 0]} position={[0, -5, 5]}>
    <planeGeometry args={[15, 15]} />
    <meshStandardMaterial />
  </mesh>
);

const Lights = () => {
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
};

type WobbleProps = {
    animating: boolean;
  };

const Scene: React.FC<WobbleProps> = ({ animating }) => (
  <motion.div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[800px] max-h-[800px] h-full w-full opacity-0"
   animate={{opacity: animating ? 0 : 0.2}}
   transition={{ease: "easeInOut", delay: 0.5, duration: 0.2}}>
    <Canvas shadows camera={{ position: [13, -3, -5], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <Lights />
      <Suspense fallback={null}>
        <Wobble />
      </Suspense>
    </Canvas>
  </motion.div>
);

export default Scene;
