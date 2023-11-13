import './style.css';
import { camera, initializeRenderer } from './components/sceneSetup';
import { setupLights } from './components/lighting';
import { populateStars } from './components/stars';
import { animate } from './components/animation';
import { createText } from './components/introText';
import { scene } from './components/sceneSetup';

// Initialize the renderer and attach it to your #bg canvas
const renderer = initializeRenderer(document.querySelector('#bg'));

// Setup lights in the scene
setupLights();

// Add stars to the scene
populateStars();

// Add text for the landing page
createText(scene)

// If window size is modified, it autoscales
window.addEventListener('resize', function() {
  camera.aspect = this.window.innerWidth / this.window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
// Start the animation loop
animate(renderer)