import * as THREE from 'three';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;
const renderer = new THREE.WebGLRenderer( { antialias: true } );
const myscene = new THREE.Scene();
const loader = new GLTFLoader();

loader.load( './assets/thisisbowie.glb', function ( gltf ) {

	myscene.add( gltf.scene );


}, undefined, function ( error ) {

	console.error( error );

} );

renderer.render(myscene, camera);

// const renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animation );
// document.body.appendChild( renderer.domElement );

// // animation

// function animation( time ) {

// 	gltf.rotation.x = time / 2000;
// 	gltf.rotation.y = time / 1000;

// 	renderer.render( scene, camera );

// }