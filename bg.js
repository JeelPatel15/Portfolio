/*
  bg.js — lightweight three.js background
  - Renders a subtle 3D torus-knot behind the page
  - Keeps pointer-events disabled so UI remains interactive
  - Adjusts camera distance for smaller screens to avoid clipping
*/

const scene = new THREE.Scene();

// Camera: adapt distance for small screens to keep object visible
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let baseZ = 4;
if (window.innerWidth < 900) baseZ = 5;
if (window.innerWidth < 480) baseZ = 6;
camera.position.z = baseZ;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '-2';
// Make sure the 3D canvas never intercepts pointer events (custom cursor / clicks must work)
renderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(renderer.domElement);

// 3D Object
// 3D object: torus knot with subtle material
const geometry = new THREE.TorusKnotGeometry(1, 0.35, 120, 16);
const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, metalness: 0.6, roughness: 0.3 });
const mesh = new THREE.Mesh(geometry, material);
// Slightly scale for small screens to avoid excessive overlap
if (window.innerWidth < 480) mesh.scale.set(0.85, 0.85, 0.85);
scene.add(mesh);

// Lights
const light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene.add(light1);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// Animation loop (very lightweight)
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.003;
  mesh.rotation.y += 0.004;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
