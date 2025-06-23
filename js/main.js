let scene, camera, renderer, controls;
let animateCameraFunc;

function init() {
  // Initialize scene
  initScene();

  // Create product
  createProduct(scene);

  // Add lighting
  addLighting(scene);

  // Initialize interaction
  initInteraction(scene, camera);

  // Initialize camera animation
  animateCameraFunc = initCameraAnimation(camera, controls);

  // Start animation loop
  animate();
}

function animate(time) {
  requestAnimationFrame(animate);

  // Update camera animation
  animateCameraFunc(time);

  // Render scene
  renderer.render(scene, camera);
}

// Start the app
init();
