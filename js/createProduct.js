function createProduct(scene) {
  const house = new THREE.Group();

  // Materials for walls and roof
  const wallMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1e90ff, // Neon blue
    metalness: 0.8,
    roughness: 0.2,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
  });
  const roofMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x00ffcc, // Cyan
    metalness: 0.9,
    roughness: 0.1,
    emissive: 0x00ffcc,
    emissiveIntensity: 0.3,
  });

  // White material for door and window
  const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Pure white

  // Base
  const baseGeometry = new THREE.BoxGeometry(2, 0.2, 2);
  const base = new THREE.Mesh(baseGeometry, wallMaterial);
  base.position.set(0, 0.1, 0); // Center at y=0.1 so bottom is at y=0
  base.name = "Base";
  house.add(base);

  // Front Wall
  const frontWallGeometry = new THREE.BoxGeometry(2, 2, 0.2);
  const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
  frontWall.position.set(0, 1, -0.9); // At z=-0.9
  frontWall.name = "Front Wall";
  house.add(frontWall);

  // Back Wall
  const backWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
  backWall.position.set(0, 1, 0.9); // At z=0.9
  backWall.name = "Back Wall";
  house.add(backWall);

  // Left Wall
  const sideWallGeometry = new THREE.BoxGeometry(0.2, 2, 2);
  const leftWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
  leftWall.position.set(-0.9, 1, 0); // At x=-0.9
  leftWall.name = "Left Wall";
  house.add(leftWall);

  // Right Wall
  const rightWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
  rightWall.position.set(0.9, 1, 0); // At x=0.9
  rightWall.name = "Right Wall";
  house.add(rightWall);

  // Roof
  const roofGeometry = new THREE.BoxGeometry(2.2, 0.2, 2.2);
  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.position.set(0, 2.1, 0); // On top of walls
  roof.name = "Roof";
  house.add(roof);

  // White Door
  const doorGeometry = new THREE.BoxGeometry(0.5, 1, 0.1);
  const door = new THREE.Mesh(doorGeometry, whiteMaterial);
  door.position.set(0, 0.5, -1); // On front wall, slightly in front
  door.name = "White Door";
  house.add(door);

  // White Window
  const windowGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
  const windowMesh = new THREE.Mesh(windowGeometry, whiteMaterial);
  windowMesh.position.set(0, 1.5, -1); // Above the door
  windowMesh.name = "White Window";
  house.add(windowMesh);

  // Add house to scene
  scene.add(house);
  return house;
}
