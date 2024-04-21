import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Car } from "./Car";
import {
  PerformanceMonitor,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
  useGLTF,
  CubeCamera,
  ContactShadows,
  PresentationControls,
  Html, useProgress
} from "@react-three/drei";



import { LayerMaterial, Color, Depth } from "lamina";
import * as THREE from "three";
import { Ground } from "./Ground";
import { Tesla } from "./Tesla";
// import envmap from "../assets/venice_sunset_1k.hdr"
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Model from "./Model";
import { useStoreMaster } from '../store';
import { shallow } from 'zustand/shallow';

export default function CanvasRender() {

  const storeMaster = useStoreMaster(
    (state) => ({
      envmapshow : state.envmapshow,

    }),
    shallow,
  );

  return (
    <Canvas
      camera={{ position: [0, 5, 8], fov: 60 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
        antialias: true,
        // preserveDrawingBuffer: true
      }}
      shadows
    >
      <color attach="background" args={["orange"]} />

      <group position={[0, -0.5, 0]}>
         <fog attach="fog" args={['#101010', 10, 20]} /> 
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />

        {/* <hemisphereLight intensity={0.5} color="white" groundColor="black" /> */}



        {/* <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />  */}

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
        />
        {
          !storeMaster.envmapshow && (
              <AccumulativeShadows temporal frames={100} color="orange" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={20}>
              <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
            </AccumulativeShadows> 
          )
        }

        {/* <Environment frames={1} resolution={256} background blur={1}>
              <Lightformers />
            </Environment> */}

        <Environment
          resolution={256}
          background={storeMaster.envmapshow}
          blur={2}
          files="piazza_san_marco_1k.hdr"
        ></Environment>

        <Suspense fallback={<Loader />}>
          {/* <Tesla scale={1.6} rotation={[0, Math.PI / 5, 0]} /> */}
          <Model />
          {/* <Car scale={1.6}  rotation={[0, Math.PI / 5, 0]} /> */}
        </Suspense>
        {
          storeMaster.envmapshow &&  <Ground />
        }
       





      </group>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress()
  return <Html fullscreen >
      <div
      
      className="h-screen w-full absolute top-0 left-0 bg-black text-white  flex flex-col align-middle justify-center "
      
      >

        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600  ml-[50%] align-middle" />
      
      </div>  
    </Html>
}
