declare module 'three.meshline' {
  import * as THREE from 'three';

  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[] | number[]): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    color?: THREE.ColorRepresentation;
    resolution?: THREE.Vector2 | [number, number];
    useMap?: boolean;
    map?: THREE.Texture;
    repeat?: THREE.Vector2 | [number, number];
    lineWidth?: number;
  }

  export class MeshLine extends THREE.Mesh<THREE.BufferGeometry, THREE.Material> {}
}


