import React from "react";
import "./App.css";
import ThreeDModelViewer from "./Model";

const App = () => {
  const modelPath = "/jacket.glb";

  return (
    <div className="App">
      <h1>3D Model Viewer</h1>
      <ThreeDModelViewer modelPath={modelPath} />
    </div>
  );
};

export default App;
