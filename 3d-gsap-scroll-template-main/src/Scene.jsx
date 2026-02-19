import React from "react";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import gsap from "gsap";
import { Watch } from "./Watch";
import { FaBullseye } from "react-icons/fa";

const Scene = ({ progress }) => {
  const camaraRef = useRef(null);
  useFrame(() => {
    console.log(camaraRef.current.position);
    camaraRef.current.lookAt(0, 0, 0);
  });
  useEffect(
    () => {
      const updateCamPos = () => {
        const positions = [
          [3.5, 2.17, 3.7],
          [3.7, 0.6, 0.7],
          [2.3, 5.87, -3.2],
          [0, 2.5, 3.6],
        ];
        if (progress >= 1) {
          gsap.to(camaraRef.current.position, {
            x: 0,
            y: 2.5,
            z: 3.6,
            duration: 0.5,
            ease: "power1.inOut",
          });
        } else {
          const segmentProgress = 1 / 3;
          const segmentIndex = Math.floor(progress / segmentProgress);
          // console.log(segmentIndex);
          const percentage = (progress % segmentProgress) / segmentProgress;
          // console.log(percentage);
          const [startX, startY, startZ] = positions[segmentIndex];
          const [endX, endY, endZ] = positions[segmentIndex + 1];
          const x = startX + (endX - startX) * percentage;
          const y = startY + (endY - startY) * percentage;
          const z = startZ + (endZ - startZ) * percentage;

          gsap.to(camaraRef.current.position, {
            x: x,
            y: y,
            z: z,
            duration: 0.5,
            ease: "power1.out",
          });
        }
      };
      updateCamPos();
    },
    [progress],
    camaraRef.current
  );
  return (
    <>
      <OrbitControls enableZoom={false} />
      <PerspectiveCamera
        ref={camaraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[3.5, 2.17, 3.7]}
        // position={[3.7, .6, .7]}
        // position={[2.3, .87, -4.2]}
        // position={[0, 2.5, 3.6]}
      />
      <Environment preset="city" />
      <Watch />
    </>
  );
};

export default Scene;
