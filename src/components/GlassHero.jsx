import { useEffect, useRef } from "react";
import * as THREE from "three";
const SHAPES = [
  () => new THREE.SphereGeometry(1, 128, 128),
  () => new THREE.BoxGeometry(1.6, 1.6, 1.6, 64, 64, 64),
  () => new THREE.TorusGeometry(1, 0.4, 64, 128),
  () => new THREE.OctahedronGeometry(1.3, 4),
  () => new THREE.TetrahedronGeometry(1.4, 4),
  () => new THREE.DodecahedronGeometry(1.3, 3),
  () => new THREE.IcosahedronGeometry(1.3, 3),
  () => new THREE.TorusKnotGeometry(0.8, 0.3, 256, 32, 2, 3),
  () => new THREE.PlaneGeometry(2.5, 2.5, 64, 64),
  () => new THREE.LatheGeometry(
    Array.from({ length: 50 }, (_, i) => {
      const t = i / 49;
      return new THREE.Vector2(
        0.5 + 0.4 * Math.sin(t * Math.PI * 4) * (1 - t),
        t * 2 - 1
      );
    }),
    64
  ),
  () => new THREE.ExtrudeGeometry(
    new THREE.Shape([
      new THREE.Vector2(0, 1),
      new THREE.Vector2(0.5, 1.5),
      new THREE.Vector2(1, 1),
      new THREE.Vector2(1, 0),
      new THREE.Vector2(0.5, -0.5),
      new THREE.Vector2(0, 0),
    ]),
    {
      steps: 1,
      depth: 0.8,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 4,
    }
  ),
  () => new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(-1, -1, 1),
    new THREE.Vector3(1, -1, 1),
  ]),
  () => new THREE.RingGeometry(0.5, 1, 64, 8),
  //Other than 2d shapes, used shapes and also regular 3d shapes. the shapes should be good looking giving a formal look
  () => new THREE.CapsuleGeometry(0.5, 1, 16, 32),

];

export default function GlassHero() {
  const mountRef = useRef(null);
  const shapeIndex = useRef(0);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 4.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.physicallyCorrectLights = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mountRef.current.appendChild(renderer.domElement);

    // Environment
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x222222);
    const envMap = pmrem.fromScene(envScene).texture;
    scene.environment = envMap;

    // Glass material
    const material = new THREE.MeshPhysicalMaterial({
      transmission: 1.0,
      thickness: 0.9,
      roughness: 0.05,
      ior: 1.5,
      envMapIntensity: 1.6,
      transparent: true,
      opacity: 1,
    });

    let geometry = SHAPES[0]();
    geometry.computeVertexNormals();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Shape cycle on click
    const nextShape = () => {
      shapeIndex.current =
        (shapeIndex.current + 1) % SHAPES.length;

      const newGeometry = SHAPES[shapeIndex.current]();
      newGeometry.computeVertexNormals();

      mesh.geometry.dispose();
      mesh.geometry = newGeometry;
      geometry = newGeometry;
    };

    renderer.domElement.addEventListener("click", nextShape);

    // Scroll response
    const onScroll = () => {
      const t = window.scrollY * 0.001;
      mesh.rotation.x = t * 0.4;
      mesh.rotation.y = t;
    };
    window.addEventListener("scroll", onScroll);

    // Cursor rotation
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Double-click zoom
    let isZoomed = false;
    const onDoubleClick = () => {
      isZoomed = !isZoomed;
      mesh.scale.set(isZoomed ? 1.5 : 1, isZoomed ? 1.5 : 1, isZoomed ? 1.5 : 1);
    };
    renderer.domElement.addEventListener("dblclick", onDoubleClick);

    // Animation loop
    const animate = () => {
      mesh.rotation.y += 0.002; // Restored automatic rotation
      mesh.rotation.y += (mouseX * Math.PI * 0.2 - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (mouseY * Math.PI * 0.2 - mesh.rotation.x) * 0.05;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("dblclick", onDoubleClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative h-screen">
      <div
        ref={mountRef}
        className="absolute inset-0 cursor-pointer"
      />

      {/* Overlay text */}
      <div className="absolute bottom-24 w-full text-center pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-semibold">
          Lakshmi Sagar
        </h1>
        <p className="mt-2 text-gray-400">
          AI · ML · Systems Engineering
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Click the object to explore dimensions
        </p>
      </div>
    </section>
  );
}
