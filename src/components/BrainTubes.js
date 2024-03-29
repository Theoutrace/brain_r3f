"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { data } from "@/data";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

function Tube({ curve }) {
  const brainMat = useRef();

  useFrame(({ clock }) => {
    brainMat.current.uniforms.time.value = clock.getElapsedTime();
  });

  const BrainMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    `
      varying vec2 vUv;
      uniform float time;
        varying float vProgress;
        void main() {
          vUv = uv;
          vProgress = smoothstep(-1.,1.,sin(vUv.x*8. + time*3.));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
    `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        varying float vProgress;
        void main() {
          vec3 finalColor = mix(color,color*0.25,vProgress);
  
          // float hideCorners = smoothstep(0.,0.1,vUv.y);
          float hideCorners = smoothstep(1.,0.9,vUv.x);
          float hideCorners1 = smoothstep(0.,0.1,vUv.x);
          // vec3 finalColor = mix(color1,color2,vProgress);
          gl_FragColor.rgba = vec4(vec3(vProgress),1.);
          gl_FragColor.rgba = vec4(finalColor,hideCorners*hideCorners1);
        }
      `
  );

  extend({ BrainMaterial });

  return (
    <mesh>
      <tubeGeometry args={[curve, 64, 0.001, 2, false]} />
      <brainMaterial
        ref={brainMat}
        side={THREE.DoubleSide}
        transparent={true}
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export function Tubes({ allTheCurves }) {
  return (
    <>
      {allTheCurves.map((curve, i) => (
        <Tube key={i} curve={curve} />
      ))}
    </>
  );
}
