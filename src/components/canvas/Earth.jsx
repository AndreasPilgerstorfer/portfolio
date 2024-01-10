import React, {Suspense, useEffect, useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import "./earth-canvas.scss";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkIfTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkIfTouchDevice();

        window.addEventListener("resize", checkIfTouchDevice);

        return () => {
            window.removeEventListener("resize", checkIfTouchDevice);
        };
    }, []);

    return (
    <Canvas
      shadows
      className={isTouchDevice ? "earth-canvas" : ""}
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
              autoRotate
              enableZoom={false}
              enableRotate={true}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
          />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
    );
};

export default EarthCanvas;
