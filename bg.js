const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.zIndex = "-1";
document.body.appendChild(renderer.domElement);

// 3D Object
const geometry = new THREE.TorusKnotGeometry(1, 0.35, 120, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x6366f1,
  metalness: 0.6,
  roughness: 0.3
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Lights
const light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene.add(light1);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.003;
  mesh.rotation.y += 0.004;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
