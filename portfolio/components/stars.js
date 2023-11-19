import * as THREE from 'three';
import { scene } from './sceneSetup';

const stars = [];

export function addStar() {
  const geometry = new THREE.SphereGeometry(0.15, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xccc5b9 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  star.timeOffset = Math.random() * 100; // unique offset for each star

  scene.add(star);
  stars.push(star);
}

export function animateStars(time) {
  stars.forEach(star => {
    const scale = 1 + Math.sin(time * 2 + star.timeOffset) * 0.3;
    star.scale.set(scale, scale, scale);

    const displacement = 0.05;
    star.position.x += Math.sin(time + star.timeOffset) * displacement;
    star.position.y += Math.sin(time + star.timeOffset * 1.1) * displacement;
    star.position.z += Math.sin(time + star.timeOffset * 1.2) * displacement;
  });
}

export function populateStars() {
  Array(200).fill().forEach(addStar);
}