import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModelViewer = ({ modelPath }) => {
  const [color, setColor] = useState("#ff0000"); // Default color

  const handleColorChange = (event) => {
    setColor(event.target.value); // Update color based on input
  };

  return (
    <div className="viewer-container">
      <input type="color" onChange={handleColorChange} value={color} />
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45, position: [0, 0, 10] }} // Adjusted camera position
        style={{
          width: "50%",
          height: "80vh",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Stage environment="night">
          <Model modelPath={modelPath} color={color} />
        </Stage>
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={30}
          rotateSpeed={0.5}
          zoomSpeed={0.5}
          panSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

const Model = ({ modelPath, color }) => {
  const { scene } = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color = new THREE.Color(color);
        }
      });
    }
  }, [color]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[4, 4, 4]}
      position={[0, 0, 0]}
    />
  );
};

export default ThreeDModelViewer;
