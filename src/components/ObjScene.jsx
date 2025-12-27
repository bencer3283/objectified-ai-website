import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from '@react-three/fiber';
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const Model = ({ objName, objScale }) => {
  const obj = useLoader(OBJLoader, `/objs/${objName}.obj`);
  const myObj = useRef();

  // Apply material to all meshes in the OBJ
  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#a5a5a5ff",
          metalness: 0.1,
          roughness: 0.6,
        });
      }
    });
  }, [obj]);

  useFrame(({ clock }) => {
    if (myObj.current) {
      myObj.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  console.log(obj);
  return <primitive object={obj} scale={objScale} position={[0, -1, -4]} ref={myObj}/>;
};

export const ObjScene = ({ obj, scale = 0.3, ...props }) => {
  return (
    <Box w='full' h={{ base: "30vh", md: "60vh" }} {...props}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={1} angle={0.3} penumbra={1} />

        <Suspense fallback={null}>
          <Model objName={obj} objScale={scale} />
        </Suspense>
      </Canvas>
    </Box>
  );
};