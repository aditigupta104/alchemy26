import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    // Safety check
    if (!container) {
      console.log('Container not found');
      return;
    }

    // Get dimensions with fallback
    const width = container.offsetWidth || 400;
    const height = container.offsetHeight || 400;

    console.log('Container dimensions:', width, height);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    
    try {
      container.appendChild(renderer.domElement);
    } catch (error) {
      console.error('Error appending canvas:', error);
      return;
    }
    
    // Create shape
    const geometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 16);
    const material = new THREE.MeshNormalMaterial();
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    camera.position.z = 8;
    
    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: '400px'
      }} 
    />
  );
}

export default ThreeAnimation;