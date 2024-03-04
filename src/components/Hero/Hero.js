"use client";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { data } from "@/data";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { Tubes } from "../BrainTubes";

const PATHS = data.economics[0].paths;

const randomRange = (min, max) => Math.random() * (max - min) + min;

let curves = [];
for (let i = 0; i < 100; i++) {
  let points = [];
  let length = randomRange(0.1, 1);
  for (let j = 0; j < 100; j++) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2
      )
    );
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempcurve);
}

let brainCurves = [];

PATHS.forEach((path) => {
  let points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  brainCurves.push(tempcurve);
});

function BrainParticles({ allTheCurves }) {
  let positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < 100; i++) {
      positions.push(
        randomRange(-1, 1),
        randomRange(-1, 1),
        randomRange(-1, 1)
      );
    }
    return new Float32Array(positions);
  }, []);

  const BrainParticleMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    `
      varying vec2 vUv;
      uniform float time;
        varying float vProgress;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = 50.;
        }
      `,
    `
        uniform float time;
        void main() {
          float disc = length(gl_PointCoord.xy - vec2(0.5));
          float opacity = smoothstep(0.5,0.4,disc);
          gl_FragColor = vec4(vec3(opacity),1.);
        }
      `
  );

  extend({ BrainParticleMaterial });

  return (
    <>
      <points>
        <bufferGeometry attach="geometry">
          {/* <bufferAttribute
            attach={"attributes-position"}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          /> */}
          {/* <brainParticleMaterial
            attach="material"
            depthTest={false}
            transparent={true}
            depthWrite={false}
          /> */}
        </bufferGeometry>
      </points>
    </>
  );
}

const Hero = () => {
  return (
    <div className="bg-white h-screen">
      <Canvas camera={{ position: [0, 0, 0.3], near: 0.01, far: 5 }}>
        <color attach="background" args={["black"]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Tubes allTheCurves={brainCurves} />
        {/* <BrainParticles allTheCurves={brainCurves} /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Hero;
