import {useEffect, useRef} from 'react';
import * as THREE from 'three';
function ThreeAnimation(){
    const containerRef= useRef(null);

}
useEffect(()=>{
    //scene setup
    const scene=new THREE.Scene();
    const camera= new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer=new THREE.WebGLRenderer({alpha:true});
    const container=containerRef.current;
    const width= container.offfsetWidth;
    const height= container.offsetHeight;
    renderer.setSize(width, height);
    container.appendChild(renderer, domElement);
    //create shape
    const geometry= new THREE.TorusKnotGeometry(2,0.5,100,16);
    const material=new THREE.MeshNormalMaterial();
    const torusKnot= new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    camera.position.z=8;
    
})