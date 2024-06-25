import { Suspense} from 'react';
import {  Canvas } from '@react-three/fiber';
import { Cloud,Sky,Environment } from '@react-three/drei';
import Model from '../../../public/FinishedPlane';

function MyScene() {
    

    return (
      <Canvas  camera={{ position: [25, 10, 15], zoom: [40] }} shadows>
        
        <ambientLight  />
        <pointLight position={[10, 10, 10]} intensity={200} />
        <Suspense fallback={null}>
            <Cloud 
                seed={2}
                scale={1}
                position={[-1, 1, -0.8]}
                speed={0.5}
                opacity={1}
                
            >
                        
            </Cloud>
          <Model >
            
          </Model>
          
          <Sky />
          <Environment preset='night' />
          
        </Suspense>
      </Canvas>
    );
  }

export default MyScene;
