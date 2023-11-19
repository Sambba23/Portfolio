import * as THREE from 'three';
import { scene, camera } from '../sceneSetup';
import { sphere } from './wireframeSphere';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    checkIntersection();
}

export function checkIntersection() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([sphere]);
    if (intersects.length > 0) {
        console.log("Sphere clicked!");
    }
}

