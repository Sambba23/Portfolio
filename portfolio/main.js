import './style.css';
import { initializeRenderer } from './components/sceneSetup';
import { setupLights } from './components/lighting';
import { populateStars } from './components/stars';
import { animate } from './components/animation';

// Initialize the renderer and attach it to your #bg canvas
const renderer = initializeRenderer(document.querySelector('#bg'));

// Setup lights in the scene
setupLights();

// Add stars to the scene
populateStars();

// Start the animation loop
animate(renderer);
