import * as THREE from 'three';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'

// init

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 1, 1, 20 );
const renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
renderer.setClearColor( 0xffffff, 0);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// controls
const controls = new OrbitControls( camera, renderer.domElement ); 

// lights
const ambient = new THREE.PointLight(0xFFFFFF, 1);
ambient.position.set(0, 100, 10);
scene.add(ambient);

const ambient2 = new THREE.PointLight(0xFFFFFF, 1);
ambient2.position.set(10, 0, 100);
scene.add(ambient2);

//load gltf file
var loader = new GLTFLoader();				
	loader.load( './assets/thisisbowie2.gltf', function ( gltf ) {
	var object = gltf.scene;				
	gltf.scene.scale.set( 2, 2, 2 );			   
	gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;	
    gltf.scene.rotation.x = 90 * Math.PI/180;		    //Position (z = front +, back-)
	
	scene.add( gltf.scene );
    animate();
    // renderer.render( scene, camera);
	});	 

function animate() {

    requestAnimationFrame( animate );
    
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    
    renderer.render( scene, camera );
    
    }