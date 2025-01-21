"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";
import Model from './Model';
import { useMotionValue, useSpring } from "framer-motion"

export default function FloatingShapes() {  

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  }

  const manageMouse = e => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse);    
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [])  

  return (
    <Canvas style={{background: "#f2f2f2"}} orthographic camera={{position: [0, 0, 200], zoom: 6}}>
        <Model mouse={smoothMouse}/>
        <hemisphereLight intensity={3} skyColor="#ffffff" groundColor="#717171" />
    </Canvas>
  )
}