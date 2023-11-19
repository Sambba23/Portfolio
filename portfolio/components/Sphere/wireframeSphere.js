import * as THREE from 'three';
import { scene } from '../sceneSetup';


let sphere; // Reference to the sphere

export function addWireframeSphere() {
    // Sphere Geometry
    const geometry = new THREE.SphereGeometry(8, 32, 32); // Adjust radius and detail as needed

    // Wireframe Material
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        wireframe: true // Apply wireframe directly to the material
    });

    // Create a mesh with the geometry and wireframe material
    sphere = new THREE.Mesh(geometry, material);

    sphere.position.x = 7; // Set initial position
    // Add the sphere to the scene
    scene.add(sphere);

    return sphere; // Return the sphere for external use
}

export function animateSphere(time) {
    // Animation logic 
    if (sphere) {
        sphere.rotation.x = time * 0.2;
        sphere.rotation.y = time * 0.2;
        sphere.rotation.z = time * 0.2;
    }
}

export { sphere }; // Export the sphere
