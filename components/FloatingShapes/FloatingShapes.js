"use client";
import React, { useEffect, useState, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, PerformanceMonitor } from "@react-three/drei";
import Model from './Model';
import { useMotionValue, useSpring } from "framer-motion"
import round from 'lodash.round'

export default function FloatingShapes() {  

  const canvasRef = useRef(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  }

  const manageMouse = e => {
    if (!isCanvasVisible) return;   
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

  const [zoom, setZoom] = useState(9);

  function resizeZoom() {
    if (!canvasRef.current) return;
    const { innerWidth, innerHeight } = window;
    const aspect = innerWidth / innerHeight;
    console.log(aspect);
    setZoom(round(aspect*4));
    //canvasRef.current.camera.aspect = aspect;
    //canvasRef.current.camera.updateProjectionMatrix();
  }

  useEffect(() => {
    window.addEventListener("resize", resizeZoom());
    resizeZoom();
    return () => window.removeEventListener("resize", resizeZoom());
  }, []);


  const [dpr, setDpr] = useState(1);
  const [isCanvasVisible, setIsCanvasVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCanvasVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }} ref={canvasRef}>
      {isCanvasVisible && (
        <Canvas
          style={{ background: "#f2f2f2" }}
          orthographic
          camera={{ position: [0, 0, 200], zoom: zoom }}
          dpr={dpr}
        >
          <PerformanceMonitor onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}>
            <Model mouse={smoothMouse} />
            <hemisphereLight intensity={3} skyColor="#ffffff" groundColor="#717171" />
          </PerformanceMonitor>
        </Canvas>
      )}
    </div>
  );
}