import { useParams } from "react-router-dom";
import { menuItems } from "./data/menuItems";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Model({ url }) {
  const ref = useRef();
  const [gltf, setGltf] = useState();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, setGltf);
  }, [url]);

  useEffect(() => {
    if (gltf && ref.current) {
      ref.current.add(gltf.scene);
    }
  }, [gltf]);

  return <group ref={ref} />;
}

export default function ARView() {
  const { id } = useParams();
  const item = menuItems.find(i => i.id === id);
  const modelUrl = item?.model || "";

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight />
        <Stage environment="city" intensity={0.6}>
          <Model url={modelUrl} />
        </Stage>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
