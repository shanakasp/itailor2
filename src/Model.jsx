// ThreeDModelViewer.js
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModelViewer = ({ modelPath }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <OrbitControls />
      <Model modelPath={modelPath} />
    </Canvas>
  );
};

const Model = ({ modelPath }) => {
  const { scene } = useLoader(GLTFLoader, modelPath);

  // Adjust the model size and position here
  return (
    <primitive
      object={scene}
      scale={[2, 2, 2]} // Scale the model
      position={[0, 0, 0]} // Position the model
      rotation={[0, Math.PI / 2, 0]} // Rotation if needed
    />
  );
};

export default ThreeDModelViewer;
