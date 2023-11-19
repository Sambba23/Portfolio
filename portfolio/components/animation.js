import { scene, camera } from './sceneSetup';
import { animateStars } from './stars';
import { animateSphere } from './Sphere/wireframeSphere';

export function animate(renderer) {
  requestAnimationFrame(() => animate(renderer));

  const time = performance.now() * 0.0005;
  animateStars(time);
  animateSphere(time);

  renderer.render(scene, camera);
}