import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function Car(props) {

    const { scene } = useThree()


    // useEffect(() =>{


    //     if(scene) {
    //         scene.background = new THREE.Color( 0x333333 );

    //         scene.fog = new THREE.Fog( 0x333333, 10, 15 );
    //     }
    // },[scene])

    console.log(scene)
  const { nodes, materials } = useGLTF('rivian.glb')
  return (
    <group {...props} dispose={null}
    position={[ 0 , 1.2 ,0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearFendersFull.geometry}
        material={materials.RearFendersFull}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontFenderCladding.geometry}
        material={materials.FrontFenderCladding}
      />
      <mesh castShadow receiveShadow geometry={nodes.Hood.geometry} material={materials.Hood} />
      <mesh castShadow receiveShadow geometry={nodes.Trunk.geometry} material={materials.Trunk} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RoofMetal.geometry}
        material={materials.RoofMetal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RoofPlastic.geometry}
        material={materials.RoofPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RoofGlass.geometry}
        material={materials.RoofGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WiperCovering.geometry}
        material={materials.WiperCovering}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontWindowRails.geometry}
        material={materials.FrontWindowRails}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearFendersCladding.geometry}
        material={materials.RearFendersCladding}
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
        geometry={nodes.SideWindowPlastic.geometry}
        material={materials.SideWindowPlastic}
      />
      <mesh castShadow receiveShadow geometry={nodes.Bottom.geometry} material={materials.Bottom} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PartialFenders.geometry}
        material={materials.PartialFenders}
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
        geometry={nodes.FrontLeftTire.geometry}
        material={materials.FrontLeftTire}
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
        geometry={nodes.Interior.geometry}
        material={materials.Interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftFrontAlloy.geometry}
        material={materials.LeftFrontAlloy}
      />
      <mesh castShadow receiveShadow geometry={nodes.Logo.geometry} material={materials.Logo} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearBumper.geometry}
        material={materials.RearBumper}
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
        geometry={nodes.RearRightTire.geometry}
        material={materials.RearRightTire}
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
        geometry={nodes.TextLogoBack.geometry}
        material={materials.TextLogoBack}
      />
      <mesh castShadow receiveShadow geometry={nodes.Wipers.geometry} material={materials.Wipers} />
      <mesh castShadow receiveShadow geometry={nodes.Doors.geometry} material={materials.Doors} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SideDoorRubber.geometry}
        material={materials.SideDoorRubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorCladding.geometry}
        material={materials.DoorCladding}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontBumperSilver.geometry}
        material={materials.FrontBumperSilver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontBumperPlastic.geometry}
        material={materials.FrontBumperPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontBumperHooks.geometry}
        material={materials.FrontBumperHooks}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontBumper.geometry}
        material={materials.FrontBumper}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearBumperSilver.geometry}
        material={materials.RearBumperSilver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OuterPlasticGlass.geometry}
        material={materials.OuterPlasticGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontWindow.geometry}
        material={materials.FrontWindow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FrontSideWindow.geometry}
        material={materials.FrontSideWindow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackWindow.geometry}
        material={materials.BackWindow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.InteriorPlasticGlass.geometry}
        material={materials.InteriorPlasticGlass}
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
        geometry={nodes.RearBackWindowGlass.geometry}
        material={materials.RearBackWindowGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftRearAlloy.geometry}
        material={materials.LeftRearAlloy}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightRearAlloy.geometry}
        material={materials.RightRearAlloy}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightFrontAlloy.geometry}
        material={materials.RightFrontAlloy}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightGlass.geometry}
        material={materials.RearLightGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightMetal.geometry}
        material={materials.RearLightMetal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightPlastic.geometry}
        material={materials.RearLightPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RearLightRed.geometry}
        material={materials.RearLightRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeadlightsGlass.geometry}
        material={materials.HeadlightsGlass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeadlightsPlastic.geometry}
        material={materials.HeadlightsPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeadlightsWhite.geometry}
        material={materials.HeadlightsWhite}
      />
    </group>
  )
}

useGLTF.preload('rivian.glb')

