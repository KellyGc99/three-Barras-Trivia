// import React from "react";
// import { useRef, useEffect } from "react";
// import * as THREE from "./build/three.module"
// import { RenderPass } from "./jsm/postprocessing/RenderPass";
// import { UnrealBloomPass } from "./jsm/postprocessing/UnrealBloomPass";
// import { EffectComposer } from "./jsm/postprocessing/EffectComposer";
// import { OrbitControls } from "./jsm/controls/OrbitControls";

// const Grafica = (props) => {
//     const mountRef = useRef(null);
//     var len = Object.keys(props).length
//     console.log(props)
//     useEffect(() => {
//         let scene;
//         let camera;
//         let controls;
//         let renderer;
//         let sceneWidth;
//         let sceneHight;
//         let cube;
//         let group;
//         let composicion;
//         let currentRef = mountRef.current
//         // Funcion que inicia
//         init()

//         function init() {
//             createScene()
//             update()
//         }
//         function createScene() {
//             //Scene
//             sceneHight = window.innerHeight;
//             sceneWidth = window.innerWidth;
//             scene = new THREE.Scene()
//             var skybox = new THREE.CubeTextureLoader().load([

//                 '../assets/Skybox/skybox_right.jpg',//derecha
//                 '../assets/Skybox/skybox_left.jpg', //izquierda
//                 '../assets/Skybox/skybox_up.jpg',// arriba
//                 '../assets/Skybox/skybox_down.jpg',//abajo
//                 '../assets/Skybox/skybox_back.jpg',// atras
//                 '../assets/Skybox/skybox_front.jpg' // frente

//             ]);

//             scene.background = skybox;

//             //Renderer
//             renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//             renderer.setSize(sceneWidth, sceneHight);
//             //Container
//             currentRef.appendChild(renderer.domElement)
//             //Camera 
//             camera = new THREE.PerspectiveCamera(30, sceneWidth / sceneHight, 1, 10000)
//             camera.position.set(0, 300, 1100)
//             //Bloom
//             var renderScene = new RenderPass(scene, camera);
//             var bloomPass = new UnrealBloomPass(
//                 new THREE.Vector2(sceneWidth, sceneHight), 1, 0, 0);
//             composicion = new EffectComposer(renderer)
//             composicion.addPass(renderScene);
//             composicion.addPass(bloomPass);

//             //Luces
//             let light = new THREE.DirectionalLight(0x5d7a7f);
//             light.position.set(0, 0, 1);
//             scene.add(light)
//             let lightTwo = new THREE.HemisphereLight(0x5d7a7f, 0x5d7a7f, 0.5);
//             lightTwo.position.set(0, 0, 5)
//             scene.add(lightTwo);
//             //Controls
//             controls = new OrbitControls(camera, renderer.domElement);
//             controls.update();
//             //Construir elemento
//             // let geometry = new THREE.BoxGeometry(10, 10, 10)
//             // let material = new THREE.MeshPhongMaterial({ color: 0xee1122 })
//             // cube = new THREE.Mesh(geometry, material);
//             // cube.position.z -=500;
//             // scene.add(cube)

//             newGroup()

//             createPlane()
//         }
//         function answers(o,i) {
//             const groupRta = new THREE.Group()
//             const w = 10;
//             const h = 50;
//             // const minH = 1;
//             let rta1 , rta2;
//             const geometry1 = new THREE.BoxGeometry(w, h , w);
//             const material1 = new THREE.MeshBasicMaterial({ color: 0x0f2c66 })
//             const geometry2 = new THREE.BoxGeometry(w, 0 ,  w);
//             const material2 = new THREE.MeshBasicMaterial({ color: 0xFF8000 })
//             console.log(o)
//             if (o === "True") {
//                 rta1 = new THREE.Mesh(geometry1, material1);
//                 rta2 = new THREE.Mesh(geometry2,material2)
//                 rta1.translateY(25)
//             } else {
//                 rta1 = new THREE.Mesh(geometry2, material1);
//                 rta2 = new THREE.Mesh(geometry1,material2)
//                 rta2.translateY(25)
//             }
//             rta2.position.x=(10)
//             return groupRta.add(rta1,rta2)
//         }
//         function newGroup() {
//             group = new THREE.Group();
//             group.position.x = 40;
//             group.position.y = 0;
//             group.position.z = 0;
//             scene.add(group)

//             for (let i = 0; i < len; i++) {
//                 let h=props[i]
//                 cube=answers(h,i)
//                 cube.position.x = (i - 5) * (20 + 25)
//                 // cube.translateY=(10)
//                 group.add(cube);

//             }
//         }

//         function createPlane() {
//             var group = new THREE.Group()
//             const planoB = new THREE.PlaneGeometry(1000, 1000, 1, 1);
//             const plano = new THREE.PlaneGeometry(1000, 1000, 32, 32);
//             planoB.rotateX(-Math.PI / 2);
//             plano.rotateX(-Math.PI / 2);
//             var vertices = plano.vertices;
//             console.log(plano)

//             for (let i = 0; i < vertices.length; i++) {
//                 vertices[i].y = (Math.random() > 0.8) ? Math.random() * 100 : 0;
//             }
//             plano.faces.forEach((value) => {

//                 const i = plano.vertices[value.a];
//                 const j = plano.vertices[value.b];
//                 const k = plano.vertices[value.c];

//                 const maximo = Math.max(i.y, j.y, k.y);

//                 if (maximo > 1) return value.color.set(0xffffff);
//                 value.color.set(0x000000);

//             });

//             plano.verticesNeedUpdate = true;
//             plano.colorsNeedUpdate = true;



//             const materialP = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, wireframe: true });
//             const materialP2 = new THREE.MeshBasicMaterial({ color: 0x000000 });
//             var mesh = new THREE.Mesh(plano, materialP);
//             var mesh2 = new THREE.Mesh(planoB, materialP2);
//             mesh2.position.y -= 10
//             group.add(mesh2)
//             group.add(mesh);
//             scene.add(group)
//         }

//         function update() {
//             requestAnimationFrame(update);
//             render();
//             composicion.render();
//         }

//         function render() {

//             controls.update();
//             camera.position.z += Math.sin(Math.cos(10)) / 10;
//             camera.position.x += Math.cos(Math.sin(10)) / 10;
//             //camera.position.y -= Math.sin( Math.cos( 10 ) ) / 10;
//             //camera.lookAt( group.position )
//             // console.log(renderer.info.render.calls);
//             renderer.render(scene, camera);

//         }

//         return () => {
//             currentRef.removeChild(renderer.domElement)
//         }
//     })


//     return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>
// }

// export default Grafica;