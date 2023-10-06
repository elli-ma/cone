"use client";

import { useState } from "react";
import SimpleForm from "../components/SimpleForm";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import Cone from "./Cone";

export default function App() {
  const [height, setHeight] = useState<number>(1);
  const [radius, setRadius] = useState<number>(1);
  const [triangleCount, setTriangleCount] = useState<number>(32);
  const [data, setData] = useState([]);

  async function onSubmit() {
    const response = await fetch("/api/cone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ height, radius, triangleCount }),
    });
    setData(await response.json());
  }

  return (
    <div className="relative">
      <div className="absolute left-10 top-0 z-40">
        <SimpleForm
          onSubmit={onSubmit}
          height={height}
          setHeight={setHeight}
          radius={radius}
          setRadius={setRadius}
          triangleCount={triangleCount}
          setTriangleCount={setTriangleCount}
        />
      </div>
      <div className="h-screen w-screen z-0">
        <Canvas scene={{ background: new Color("gray") }}>
          <pointLight position={[10, 10, 10]} />
          <Cone data={data} />
        </Canvas>
      </div>
    </div>
  );
}
