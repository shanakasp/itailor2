import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function Model({ unchangedMaterials, ...props }) {
  const { nodes, materials } = useGLTF("/jacket.glb");
  const groupRef = useRef();

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cloth.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth001.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth002.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth003.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth004.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth005.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth006.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth007.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth008.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth009.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth010.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth011.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth012.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth013.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth014.geometry}
        material={materials["Cotton_Heavy_Twill Copy 1_FRONT_230423.002"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth015.geometry}
        material={materials["Cotton_Heavy_Twill Copy 1_FRONT_230423.002"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth016.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth017.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth018.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth019.geometry}
        material={materials["Cotton_Heavy_Twill_FRONT_230413.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth020.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth021.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth022.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth023.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth024.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth025.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cloth026.geometry}
        material={
          materials["Interlining_Polyester_Satin_Lining_FRONT_4715011.004"]
        }
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          geometry={nodes.MatShape_25991001.geometry}
          material={materials["Material10559664.002"]}
        />
        <mesh
          geometry={nodes.MatShape_25991001_1.geometry}
          material={materials["Material10559665.002"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          geometry={nodes.MatShape_26016001.geometry}
          material={materials["Material10559664.002"]}
        />
        <mesh
          geometry={nodes.MatShape_26016001_1.geometry}
          material={materials["Material10559665.002"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          geometry={nodes.MatShape_26041001.geometry}
          material={materials["Material11274330.002"]}
        />
        <mesh
          geometry={nodes.MatShape_26041001_1.geometry}
          material={materials["Material11274331.002"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          geometry={nodes.MatShape_26066001.geometry}
          material={materials["Material11274330.002"]}
        />
        <mesh
          geometry={nodes.MatShape_26066001_1.geometry}
          material={materials["Material11274331.002"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          geometry={nodes.MatShape_26091001.geometry}
          material={materials["Material11274330.002"]}
        />
        <mesh
          geometry={nodes.MatShape_26091001_1.geometry}
          material={materials["Material11274331.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/jacket.glb");
