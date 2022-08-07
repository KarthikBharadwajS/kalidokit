import { get3dModel } from "../utils/model-handler";
import { disableProgressBar, enableProgressBar, setPercentage } from "./settings/progress-bar";
/* THREEJS WORLD SETUP */
export let currentVrm;

// renderer
export const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// camera
const orbitCamera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
orbitCamera.position.set(0.0, 1.4, 0.7);

// controls
const orbitControls = new THREE.OrbitControls(orbitCamera, renderer.domElement);
orbitControls.screenSpacePanning = true;
orbitControls.target.set(0.0, 1.4, 0.0);
orbitControls.update();

// scene
export const scene = new THREE.Scene();

// light
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1.0, 1.0, 1.0).normalize();
scene.add(light);
renderer.setClearColor(new THREE.Color("#525252"), 1);

// Main Render Loop
const clock = new THREE.Clock();

function world() {
    requestAnimationFrame(world);

    if (currentVrm) {
        // Update model to render physics
        currentVrm.update(clock.getDelta());
    }
    renderer.render(scene, orbitCamera);
};
world();

// Import Character VRM
const loader = new THREE.GLTFLoader();
loader.crossOrigin = "anonymous";

// Import model from URL, add your own model here
export const loadModel = (modelUrl) => {
    loader.load(
        modelUrl,
        (gltf) => {
            THREE.VRMUtils.removeUnnecessaryJoints(gltf.scene);

            THREE.VRM.from(gltf).then((vrm) => {
                scene.add(vrm.scene);
                currentVrm = vrm;
                currentVrm.scene.rotation.y = Math.PI; // Rotate model 180deg to face camera
            });
        },

        (progress) => {
            const percentage = Math.ceil(100.0 * (progress.loaded / progress.total));
            if (percentage !== Infinity) {
                enableProgressBar();
                setPercentage(percentage);
                if (percentage == 100) {
                    disableProgressBar();
                }
            }
        },

        (error) => console.error(error)
    );
};
loadModel(get3dModel().path);