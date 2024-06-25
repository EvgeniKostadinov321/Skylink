
import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/FinishedPlane.glb')
  const { actions,names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names].play()
  }, [ actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="root" >
          <mesh 
            name="node_id30" 
            geometry={nodes.node_id30.geometry} 
            material={materials['49']} 
            
            rotation={[15, 10, 5]}
            scale={5} 
            
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/FinishedPlane.glb')
