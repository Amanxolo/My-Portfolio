import * as THREE from 'three';
import "./style.css"
import gsap from "gsap"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //Do imports from official THREE.js docs
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// //Scene
// const scene = new THREE.Scene();
// //Create geometry
// // const geometry = new THREE.TorusKnotGeometry(2.956,1.0195,12);
// // const material = new THREE.MeshStandardMaterial({
// //   color: "skyblue",
// // });
// // const mesh = new THREE.Mesh(geometry,material);
// // scene.add(mesh);

// //Sizes
// const sizes ={
//   width: window.innerWidth,
//   height: window.innerHeight,
// }
// //Light
// const light = new THREE.PointLight(0xffffff,1,100);
// light.position.set(10,10,10);
// scene.add(light);
// //Camera
// const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height);
// camera.position.z = 20;
// scene.add(camera);


// //Renderer
// const canvas = document.querySelector('.webgl');
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize(sizes.width,sizes.height);
// renderer.render(scene,camera);

// //Controls
// const controls = new OrbitControls(camera,canvas);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.enableZoom = false;
// // controls.autoRotate = true;
// controls.autoRotateSpeed = 9;

// let model
// const loader = new GLTFLoader()
// loader.load(
//     'models/monkey.gltf',
//     function (gltf) {
//         // gltf.scene.traverse(function (child) {
//         //     if ((child as THREE.Mesh).isMesh) {
//         //         const m = (child as THREE.Mesh)
//         //         m.receiveShadow = true
//         //         m.castShadow = true
//         //     }
//         //     if (((child as THREE.Light)).isLight) {
//         //         const l = (child as THREE.SpotLight)
//         //         l.castShadow = true
//         //         l.shadow.bias = -.003
//         //         l.shadow.mapSize.width = 2048
//         //         l.shadow.mapSize.height = 2048
//         //     }
//         // })
        
//         model = gltf
//         scene.add(gltf.scene)
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//     },
//     (error) => {
//         console.log(error)
//     }
// )


// //Resize
// window.addEventListener('resize',() =>{
//   //update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;
//   //Update camera
//   camera.aspect = sizes.width/sizes.height;
//   camera.updateProjectionMatrix();
//   renderer.setSize(sizes.width,sizes.height);

// })

// const loop = () => {
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(loop);
// }
// loop()

// //Timeline magiccc
// const t1 = gsap.timeline({defaults: {duration: 1}});
// t1.fromTo(mesh.scale, {z: 0, x: 0, y: 0},{z: 1, x: 1, y: 1});

// import SplineLoader from '@splinetool/loader';

// // camera
// const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 10000);
// camera.position.set(0, 0, 0);
// camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

// // scene
// const scene = new THREE.Scene();

// // spline scene
// const loader = new SplineLoader();
// loader.load(
//   'https://prod.spline.design/X8fvVP0eldPKmfu8/scene.splinecode',
//   (splineScene) => {
//     scene.add(splineScene);
//   }
// );

// // renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// // scene settings
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// scene.background = new THREE.Color('#2d2e32');
// renderer.setClearAlpha(1);

// // orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.125;
// controls.autoRotate = true
// controls.enableZoom = false

// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   camera.left = window.innerWidth / - 2;
//   camera.right = window.innerWidth / 2;
//   camera.top = window.innerHeight / 2;
//   camera.bottom = window.innerHeight / - 2;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate(time) {
//   controls.update();
//   renderer.render(scene, camera);
// }

import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/X8fvVP0eldPKmfu8/scene.splinecode');

