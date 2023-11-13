import { scene, camera } from './sceneSetup';
import { animateStars } from './stars';

export function animate(renderer) {
  requestAnimationFrame(() => animate(renderer));

  const time = performance.now() * 0.0005;
  animateStars(time);

  renderer.render(scene, camera);
}