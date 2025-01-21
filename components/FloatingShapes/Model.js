import React, { useEffect, useState } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { MeshStandardMaterial } from "three"; // Import MeshStandardMaterial for custom materials

// Tailwind color mapping
const tailwindColors = {
  red: "#fca5a5",     // red-200
  green: "#bbf7d0",   // green-200
  blue: "#93c5fd",    // blue-200
  yellow: "#fef08a",  // yellow-200
  purple: "#e9d5ff",  // purple-200
  pink: "#fbbfcb",    // pink-200
};

export default function Model({mouse}) {
  const [activeShape, setActiveShape] = useState(1);

  useEffect( () => {
    setTimeout( () => {
      if(activeShape == 11){
        setActiveShape(1);
      }
      else{
        setActiveShape(activeShape + 1);
      }
    }, 2000);
  }, [activeShape]);

  const { nodes } = useGLTF("/three/floating_shapes4.glb");

  return (
    <group>
      <Mesh node={nodes.Sphere001} multiplier={2.4} mouse={mouse} isActive={activeShape == 1} color={tailwindColors.red} />
      <Mesh node={nodes.Sphere002} multiplier={2.4} mouse={mouse} isActive={activeShape == 2} color={tailwindColors.green} />
      <Mesh node={nodes.Cylinder002} multiplier={1.2} mouse={mouse} isActive={activeShape == 3} color={tailwindColors.blue} />
      <Mesh node={nodes.Sphere003} multiplier={1} mouse={mouse} isActive={activeShape == 4} color={tailwindColors.yellow} />
      <Mesh node={nodes.Cylinder003} multiplier={1.8} mouse={mouse} isActive={activeShape == 5} color={tailwindColors.purple} />
      <Mesh node={nodes.Cylinder005} multiplier={1.8} mouse={mouse} isActive={activeShape == 6} color={tailwindColors.pink} />
      <Mesh node={nodes.Cube002} multiplier={2} mouse={mouse} isActive={activeShape == 7} color={tailwindColors.red} />
      <Mesh node={nodes.Cylinder006} multiplier={1.2} mouse={mouse} isActive={activeShape == 8} color={tailwindColors.green} />
      <Mesh node={nodes.Cylinder007} multiplier={1.6} mouse={mouse} isActive={activeShape == 9} color={tailwindColors.blue} />
      <Mesh node={nodes.Cylinder009} multiplier={1.8} mouse={mouse} isActive={activeShape == 10} color={tailwindColors.yellow} />
      <Mesh node={nodes.Sphere} multiplier={1.5} mouse={mouse} isActive={activeShape == 11} color={tailwindColors.purple} />
    </group>
  );
}

useGLTF.preload("/three/floating_shapes4.glb");

function Mesh({node, multiplier, mouse, isActive, color}) {
  const { geometry, position, scale, rotation } = node;
  const a = multiplier / 2;
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - a, rotation.x + a]);
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - a, rotation.y + a]);
  const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier * 2, position.x + multiplier * 2]);
  const positionY = useTransform(mouse.y, [0, 1], [position.y + multiplier * 2, position.y - multiplier * 2]);

  const material = new MeshStandardMaterial({ color: color, roughness: 0.5, metalness: 0.1 });

  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
  };

  return (
    <Float>
      <motion.mesh
        castShadow={true}
        receiveShadow={true}
        geometry={geometry}
        material={material} // Apply the color passed as prop
        position={position}
        rotation={rotation}
        scale={scale}
        rotation-y={rotationX}
        rotation-x={rotationY}
        position-x={positionX}
        position-y={positionY}
        animate={{ rotateZ: isActive ? rotation.z + getRandomMultiplier() : null }}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}
