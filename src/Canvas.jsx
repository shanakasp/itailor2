import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { Model } from "./components/Model";

const ThreeDModelViewer = ({ modelPath }) => {
  const [color, setColor] = useState("#ff0000"); // Default color

  const handleColorChange = (event) => {
    setColor(event.target.value); // Update color based on input
  };

  // List of material names that should not change color
  const unchangedMaterials = [
    "Object",
    "Object.009",
    "Object.008",
    "Object.007",
    "Object.006",
    "Object.005",
    "Object.004",
    "Object.003",
    "Object.002",
  ];

  return (
    <div className="viewer-container">
      <input
        type="color"
        onChange={handleColorChange}
        value={color}
        style={{ marginBottom: "10px" }} // Add some space below the color picker
      />
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45, position: [0, 0, 10] }} // Adjusted camera position
        style={{
          width: "60%",
          height: "80vh",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
        <Stage environment="night">
          <Model
            modelPath={modelPath}
            color={color}
            unchangedMaterials={unchangedMaterials}
          />
        </Stage>
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 2} // Restrict vertical rotation to avoid flipping
          minDistance={1} // Lower the minimum distance for more zoom-in
          maxDistance={10} // Maximum zoom distance
          rotateSpeed={0.5}
          zoomSpeed={0.5}
          panSpeed={0.5}
          autoRotate={false} // Disable auto-rotation
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
