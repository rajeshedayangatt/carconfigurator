import React, { useRef , useLayoutEffect, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { FlakesTexture } from 'three-stdlib'
import { useStoreMaster } from '../store';
import { shallow } from 'zustand/shallow';
import { useFrame } from '@react-three/fiber'

let customunforms = {
  uColor : { value : new THREE.Vector3(1.0,1.0,1.0)},
  uPrevious : {value : new THREE.Vector3(1.0,1.0,1.0) },
  uTime : { value : 0}
}

export default function Model() {

  
    const storeMaster = useStoreMaster(
        (state) => ({
          color : state.color,
          parts : state.parts,
          flaketextureshow : state.flaketextureshow,

        }),
        shallow,
      );
    

    const { scene } = useGLTF("tesla.glb");

    let prevColor = useRef(null)

    // useFrame(({ clock }) => {

    //   utime.current += clock.getElapsedTime()


    // })
    


    useEffect(() => {

        if(storeMaster.color){
    
          let mesh = null;
    

          if(storeMaster.parts === "Front Bumper") {
             mesh = scene.getObjectByName("FrontBumper");
          }
    
          if(storeMaster.parts === "Hood") {
             mesh = scene.getObjectByName("Hood");
          }
          if(storeMaster.parts === "Doors") {
            mesh = scene.getObjectByName("Doors");
    
          }
    
          if(storeMaster.parts === "Rear Doors") {
            mesh = scene.getObjectByName("RearDoors");
    
          }
    
          if(storeMaster.parts === "Full Fender") {
            mesh = scene.getObjectByName("FullFenders");
    
          }
    
          if(storeMaster.parts === "Full Fender") {
            mesh = scene.getObjectByName("FullFenders");
    
          }
    
          if(storeMaster.parts === "Front Bumper") {
            mesh = scene.getObjectByName("FrontBumper");
    
          }
    
          
          if(storeMaster.parts === "Rocker Pannels") {
            mesh = scene.getObjectByName("RockerPanels");
    
          }
          if(storeMaster.parts === "Trunk") {
            mesh = scene.getObjectByName("Trunk");
    
          }
    
          if(storeMaster.parts === "Rear Bumper") {
            mesh = scene.getObjectByName("RearBumper");
    
          }
          if(storeMaster.parts === "Side View Mirror") {
            mesh = scene.getObjectByName("SideViewMirrors");
    
          }
          if(storeMaster.parts === "Roof") {
            mesh = scene.getObjectByName("Roof");
    
          }
          if(storeMaster.parts === "Door Handles") {
            mesh = scene.getObjectByName("DoorHandles");
    
          }
    
          // console.log(mesh.material)
          //if(mesh){
    
          let clr = new THREE.Color(storeMaster.color)

          prevColor.current
          customunforms.uColor.value = clr


          if(prevColor.current){

            let prevcolorval = new THREE.Color(prevColor.current)

            console.log(prevcolorval)

            customunforms.uPrevious.value = prevcolorval

          }
          // console.log(customunforms.uColor.value)

          // console.log(customunforms.uPrevious.value)
          // for(let i = 0.0; i < 1.0; i+=0.01){


          //   customunforms.uTime.value = i


          // }
        
            
            // mesh.uniforms.myUniform.value = clr
            // mesh.material.onBeforeCompile = function(shader) {


      
            //   // shader.uniforms.myUniform = { value: 0 }; // Update the uniform value
            //   shader.uniforms.uColor = customunforms.uColor
            //   shader.uniforms.uTime = customunforms.uTime
            //   shader.uniforms.uPrevious = customunforms.uPrevious

              

            //     shader.fragmentShader = shader.fragmentShader.replace(
            //       `#include <common>`,
            //       `#include <common>
            //        uniform vec3 uColor;
            //        uniform vec3 uPrevious;
            //        uniform float uTime;

            //       `  )
            //     shader.fragmentShader = shader.fragmentShader.replace(
            //         `#include <color_fragment>`,
            //         `#include <color_fragment>

            //           vec3 clr = mix(uPrevious , uColor , uTime);
            //           diffuseColor = vec4(clr, 1.0);
            //         `
            //     )


            //   //   shader.fragmentShader = shader.fragmentShader.replace(
            //   //     'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            //   //     'gl_FragColor = vec4( myUniform, diffuseColor.a );'
            //   // );
            //  // console.log(shader.fragmentShader)

            // } 

           mesh.material.color.set(clr)
            mesh.material.needsUpdate = true
            // mesh.needsUpdate = true


            // Call the needsUpdate method
            mesh.material.needsUpdate = true;
            customunforms.uTime.value = 0

         // }



         prevColor.current = storeMaster.color

    
        }
    
      },[storeMaster.color])

    useEffect(() => {
        scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    
        // materials.Hood.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping)
        const FrontBumper = scene.getObjectByName("FrontBumper");
    
        FrontBumper.material = new THREE.MeshPhysicalMaterial( {
            color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );
    
        const Hood = scene.getObjectByName("Hood");
    
        Hood.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );
    
        const Doors = scene.getObjectByName("Doors");
    
        Doors.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );

        const RearDoors = scene.getObjectByName("RearDoors");
    
        RearDoors.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );

        const FullFenders = scene.getObjectByName("FullFenders");
    
        FullFenders.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );
  

        const RockerPanels = scene.getObjectByName("RockerPanels");
    
        RockerPanels.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );

        const Trunk = scene.getObjectByName("Trunk");
    
        Trunk.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );


        const RearBumper = scene.getObjectByName("RearBumper");
    
        RearBumper.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );

        const SideViewMirrors = scene.getObjectByName("SideViewMirrors");
    
        SideViewMirrors.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );

        const Roof = scene.getObjectByName("Roof");
    
        Roof.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );

        const DoorHandles = scene.getObjectByName("DoorHandles");
    
        DoorHandles.material = new THREE.MeshPhysicalMaterial( {
          color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
        } );



    
        
        // materials.Hood.color.set(0xff0000)
        // materials.Hood.roughness = 0
        // materials.Hood.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        // materials.Hood.normalMap.repeat.set(40, 40)
        // materials.Hood.normalScale.set(0.1, 0.1)
    
    
      //   materials.Doors.color.set(0xff0000)
      //  // materials.Doors.roughness = 0
      //   materials.Doors.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
      //   materials.Doors.normalMap.repeat.set(40, 40)
      //   materials.Doors.normalScale.set(0.1, 0.1)
    
    
      //   materials.RearDoors.color.set(0xff0000)
      // //  materials.RearDoors.roughness = 0
      //   materials.RearDoors.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
      //   materials.RearDoors.normalMap.repeat.set(40, 40)
      //   materials.RearDoors.normalScale.set(0.1, 0.1)
    
        
      //   materials.FrontBumper.color.set(0xff0000)
      //  // materials.FrontBumper.roughness = 0
      //   materials.FrontBumper.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
      //   materials.FrontBumper.normalMap.repeat.set(40, 40)
      //   materials.FrontBumper.normalScale.set(0.1, 0.1)
    
      //   materials.RockerPanels.color.set(0xff0000)
      //  // materials.RockerPanels.roughness = 0
      //   materials.RockerPanels.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
      //   materials.RockerPanels.normalMap.repeat.set(40, 40)
      //   materials.RockerPanels.normalScale.set(0.1, 0.1)
    
    
      },[])

      useEffect(() => {

        if(storeMaster.flaketextureshow){

        const FrontBumper = scene.getObjectByName("FrontBumper");
        FrontBumper.material.roughness = 0

        FrontBumper.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        FrontBumper.material.normalMap.repeat.set(40, 40)
        FrontBumper.material.normalScale.set(0.1, 0.1)
    

    
        const Hood = scene.getObjectByName("Hood");
        Hood.material.roughness = 0
        Hood.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        Hood.material.normalMap.repeat.set(40, 40)
        Hood.material.normalScale.set(0.1, 0.1)
    
        const Doors = scene.getObjectByName("Doors");
        Doors.material.roughness = 0
        Doors.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        Doors.material.normalMap.repeat.set(40, 40)
        Doors.material.normalScale.set(0.1, 0.1)

        const RearDoors = scene.getObjectByName("RearDoors");
        RearDoors.material.roughness = 0

        RearDoors.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        RearDoors.material.normalMap.repeat.set(40, 40)
        RearDoors.material.normalScale.set(0.1, 0.1)

        const FullFenders = scene.getObjectByName("FullFenders");
        FullFenders.material.roughness = 0

        FullFenders.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        FullFenders.material.normalMap.repeat.set(40, 40)
        FullFenders.material.normalScale.set(0.1, 0.1)

        const RockerPanels = scene.getObjectByName("RockerPanels");
        RockerPanels.material.roughness = 0

        RockerPanels.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        RockerPanels.material.normalMap.repeat.set(40, 40)
        RockerPanels.material.normalScale.set(0.1, 0.1)

        const Trunk = scene.getObjectByName("Trunk");
        Trunk.material.roughness = 0

        Trunk.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        Trunk.material.normalMap.repeat.set(40, 40)
        Trunk.material.normalScale.set(0.1, 0.1)


        const RearBumper = scene.getObjectByName("RearBumper");
        RearBumper.material.roughness = 0

        RearBumper.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        RearBumper.material.normalMap.repeat.set(40, 40)
        RearBumper.material.normalScale.set(0.1, 0.1)

        const SideViewMirrors = scene.getObjectByName("SideViewMirrors");
        SideViewMirrors.material.roughness = 0

        SideViewMirrors.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        SideViewMirrors.material.normalMap.repeat.set(40, 40)
        SideViewMirrors.material.normalScale.set(0.1, 0.1)

        const Roof = scene.getObjectByName("Roof");
        Roof.material.roughness = 0

        Roof.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        Roof.material.normalMap.repeat.set(40, 40)
        Roof.material.normalScale.set(0.1, 0.1)

        const DoorHandles = scene.getObjectByName("DoorHandles");
        DoorHandles.material.roughness = 0

        DoorHandles.material.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
        DoorHandles.material.normalMap.repeat.set(40, 40)
        DoorHandles.material.normalScale.set(0.1, 0.1)

        }else{

            const FrontBumper = scene.getObjectByName("FrontBumper");
            FrontBumper.material.roughness = 0.5
            FrontBumper.material.normalMap = null
        
    
        
            const Hood = scene.getObjectByName("Hood");
            Hood.material.roughness = 0.5
            Hood.material.normalMap = null
        
            const Doors = scene.getObjectByName("Doors");
            Doors.material.roughness = 0.5
            Doors.material.normalMap = null
    
    
            const RearDoors = scene.getObjectByName("RearDoors");
            RearDoors.material.roughness = 0.5
            RearDoors.material.normalMap = null
    
            const FullFenders = scene.getObjectByName("FullFenders");
            FullFenders.material.roughness = 0.5
            FullFenders.material.normalMap = null
    
            const RockerPanels = scene.getObjectByName("RockerPanels");
            RockerPanels.material.roughness = 0.5
            RockerPanels.material.normalMap = null
    
            const Trunk = scene.getObjectByName("Trunk");
            Trunk.material.roughness = 0.5
            Trunk.material.normalMap = null
    
    
            const RearBumper = scene.getObjectByName("RearBumper");
            RearBumper.material.roughness = 0.5
            RearBumper.material.normalMap = null
    
            const SideViewMirrors = scene.getObjectByName("SideViewMirrors");
            SideViewMirrors.material.roughness = 0.5
            SideViewMirrors.material.normalMap = null
    
            const Roof = scene.getObjectByName("Roof");
            Roof.material.roughness = 0.5
            Roof.material.normalMap = null
    
            const DoorHandles = scene.getObjectByName("DoorHandles");
            DoorHandles.material.roughness = 0.5
            DoorHandles.material.normalMap = null
        }
      },[storeMaster.flaketextureshow])
    
    return (<primitive  
        scale={1.6} rotation={[0, Math.PI / 5, 0]}     
    castShadow
    receiveShadow
    object={scene}
    />)
}