import React, { useRef , useLayoutEffect, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { FlakesTexture } from 'three-stdlib'
import { useStoreMaster } from '../store';
import { shallow } from 'zustand/shallow';
export function Tesla(props) {

  
  const storeMaster = useStoreMaster(
    (state) => ({
      color : state.color,
      parts : state.parts,

    }),
    shallow,
  );


  const { nodes, materials,scene } = useGLTF('tesla.glb')

  useLayoutEffect(() => {

    if(storeMaster.color){

      const clr = new THREE.Color(storeMaster.color)
      let mesh = null;

      console.log(storeMaster.color)
      console.log(storeMaster.parts)

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


      if(mesh){

        console.log(mesh)

        mesh.material.color = clr
        mesh.material.needsUpdate = true
      }


    }

  },[storeMaster.color])

  
  useLayoutEffect(() => {
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))

    // materials.Hood.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping)
    const FrontBumper = scene.getObjectByName("FrontBumper");

    FrontBumper.material = new THREE.MeshPhysicalMaterial( {
      color: 0xffffff, metalness: 0.25, roughness: 0, transmission: 1.0
    } );

    const Hood = scene.getObjectByName("Hood");

    Hood.material = new THREE.MeshPhysicalMaterial( {
      color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    } );



    // materials.Doors = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.RearDoors = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.FullFenders = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.FrontBumper = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.RockerPanels = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.Trunk = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.RearBumper = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.SideViewMirrors = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.Roof = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );
    // materials.DoorHandles = new THREE.MeshPhysicalMaterial( {
    //   color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03
    // } );

    
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


  })


  return (
    <group {...props} dispose={null}     castShadow
    >
      <mesh castShadow receiveShadow geometry={nodes.Bottom.geometry} material={materials.Bottom} />
      <mesh castShadow receiveShadow geometry={nodes.Cabin.geometry} material={materials.Cabin} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorHandles.geometry}
        material={materials.DoorHandles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontBumper.geometry}
        material={materials.FrontBumper}
      />
      <mesh castShadow receiveShadow geometry={nodes.Doors.geometry} material={materials.Doors} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontGrill.geometry}
        material={materials.FrontGrill}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLeftDisk.geometry}
        material={materials.FrontLeftDisk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLeftRim.geometry}
        material={materials.FrontLeftRim}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLeftRimCovering.geometry}
        material={materials.FrontLeftRimCovering}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLightsExtra.geometry}
        material={materials.FrontLightsExtra}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLightsGlass.geometry}
        material={materials.FrontLightsGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLightsInner.geometry}
        material={materials.FrontLightsInner}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLogo.geometry}
        material={materials.FrontLogo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontRightDisk.geometry}
        material={materials.FrontRightDisk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontRightRim.geometry}
        material={materials.FrontRightRim}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontRightRimCovering.geometry}
        material={materials.FrontRightRimCovering}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontWhiteLight.geometry}
        material={materials.FrontWhiteLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FullFenders.geometry}
        material={materials.FullFenders}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassBlocker.geometry}
        material={materials.GlassBlocker}
      />
      <mesh castShadow receiveShadow geometry={nodes.Hood.geometry} material={materials.Hood} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MirrorsRubber.geometry}
        material={materials.MirrorsRubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearBumper.geometry}
        material={materials.RearBumper}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearDoors.geometry}
        material={materials.RearDoors}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLeftDisk.geometry}
        material={materials.RearLeftDisk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLeftRim.geometry}
        material={materials.RearLeftRim}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLeftRimCovering.geometry}
        material={materials.RearLeftRimCovering}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightsGlass.geometry}
        material={materials.RearLightsGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightsGlassExtra.geometry}
        material={materials.RearLightsGlassExtra}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightsRed.geometry}
        material={materials.RearLightsRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightsWhite.geometry}
        material={materials.RearLightsWhite}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLogo.geometry}
        material={materials.RearLogo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearReflector.geometry}
        material={materials.RearReflector}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearReflectors.geometry}
        material={materials.RearReflectors}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearReflectorsExtra.geometry}
        material={materials.RearReflectorsExtra}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearRightDisk.geometry}
        material={materials.RearRightDisk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearRightRim.geometry}
        material={materials.RearRightRim}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearRightRimCovering.geometry}
        material={materials.RearRightRimCovering}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearSkid.geometry}
        material={materials.RearSkid}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearWindowBlocker.geometry}
        material={materials.RearWindowBlocker}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RockerPanels.geometry}
        material={materials.RockerPanels}
      />
      <mesh castShadow receiveShadow geometry={nodes.Roof.geometry} material={materials.Roof} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontSideWindow.geometry}
        material={materials.FrontSideWindow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearSideWindow.geometry}
        material={materials.RearSideWindow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SideCamera.geometry}
        material={materials.SideCamera}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SideViewMirrorBottom.geometry}
        material={materials.SideViewMirrorBottom}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SideViewMirrorGlass.geometry}
        material={materials.SideViewMirrorGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SideViewMirrors.geometry}
        material={materials.SideViewMirrors}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontRightTire.geometry}
        material={materials.FrontRightTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearRightTire.geometry}
        material={materials.RearRightTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLeftTire.geometry}
        material={materials.RearLeftTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontLeftTire.geometry}
        material={materials.FrontLeftTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TireLogo.geometry}
        material={materials.TireLogo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TopGlass.geometry}
        material={materials.TopGlass}
      />
      <mesh castShadow receiveShadow geometry={nodes.Trunk.geometry} material={materials.Trunk} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WiperSheild.geometry}
        material={materials.WiperSheild}
      />
      <mesh castShadow receiveShadow geometry={nodes.Wiper.geometry} material={materials.Wiper} />
    </group>
  )
}

useGLTF.preload('tesla.glb')
