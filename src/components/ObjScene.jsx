import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from '@react-three/fiber';
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const Model = ({objName}) => {
  const materials = useLoader(MTLLoader, `/objs/${objName}.mtl`);
  const obj = useLoader(OBJLoader, `/objs/${objName}.obj`, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const myObj = useRef()

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myObj.current.rotation.y = a;
  });

  console.log(obj);
  return <primitive object={obj} scale={0.6} ref={myObj}/>;
};

export const ObjScene = ({obj}) => {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Model objName={obj}/>
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}