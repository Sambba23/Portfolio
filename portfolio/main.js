import './css/style.css';
import { camera, initializeRenderer } from './components/sceneSetup';
import { setupLights } from './components/lighting';
import { populateStars } from './components/stars';
import { animate } from './components/animation';
import { addWireframeSphere } from './components/Sphere/wireframeSphere';
import { onMouseClick } from './components/Sphere/sphereMove';
import { onDownArrowClick, onLeftArrowClick, onRightArrowClick, onUpArrowClick } from './components/actions/arrowButtons';
// Initialize the renderer and attach it to your #bg canvas
const renderer = initializeRenderer(document.querySelector('#bg'));

// Setup lights in the scene
setupLights();

// Add stars to the scene
populateStars();

// Add wireframe sphere
addWireframeSphere(); 


// If window size is modified, it autoscales
window.addEventListener('resize', function() {
  camera.aspect = this.window.innerWidth / this.window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Sphere movements
window.addEventListener('click', onMouseClick);
// Ends sphere movements

//Arrow clicks
window.onUpArrowClick = onUpArrowClick;
window.onDownArrowClick = onDownArrowClick;
window.onLeftArrowClick = onLeftArrowClick;
window.onRightArrowClick = onRightArrowClick;
//Arrow clicks end

// Start the animation loop
animate(renderer)