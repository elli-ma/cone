import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, BufferAttribute } from "three";

export default function Cone(props: { data: number[] }) {
  const meshRef = useRef<any>();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.001;
  });
  const geometry = new BufferGeometry();
  const vertices = new Float32Array(props.data);

  geometry.setAttribute("position", new BufferAttribute(vertices, 3));
  return (
    <mesh
      visible
      userData={{ hello: "world" }}
      position={[0, 0, 0]}
      ref={meshRef as any}
      rotation={[Math.PI / 2, 0, 0]}
      geometry={geometry}
    >
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
}
