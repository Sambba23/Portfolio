import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export function createText(scene) {
  const loader = new FontLoader();

  // Load a font
  loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
    // Create a geometry with your text and font
    const textGeometry = new TextGeometry('Hello Three.js!', {
      font: font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.05,
      bevelOffset: 0,
      bevelSegments: 5
    });

    // Create a material
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // Create a mesh
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Center the text
    textGeometry.computeBoundingBox();
    textGeometry.boundingBox.getCenter(textMesh.position).multiplyScalar(-1);

    // Add the text to the scene
    scene.add(textMesh);
  });
}
