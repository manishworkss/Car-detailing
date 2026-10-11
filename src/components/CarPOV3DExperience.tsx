import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import {
  Gauge,
  Droplets,
  Eye,
  Sparkles,
  ShieldCheck,
  Maximize2,
  RefreshCw,
  Zap
} from 'lucide-react';

type POVMode = 'cockpit' | 'hood' | 'studio';

export const CarPOV3DExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activePOV, setActivePOV] = useState<POVMode>('cockpit');
  const [hydrophobicActive, setHydrophobicActive] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(184);
  const [rpm, setRpm] = useState<number>(6400);
  const [isWaterSpraying, setIsWaterSpraying] = useState<boolean>(false);

  // Mouse / Touch Steering tracking
  const targetSteerRef = useRef<number>(0);
  const currentSteerRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090b, 0.025);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 0.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // 2. Lighting (Studio Detailing Bay & Tunnel Lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const goldStudioLight = new THREE.DirectionalLight(0xc5a059, 2.5);
    goldStudioLight.position.set(5, 10, 5);
    scene.add(goldStudioLight);

    const coolRimLight = new THREE.DirectionalLight(0x4a90e2, 1.8);
    coolRimLight.position.set(-5, 6, -10);
    scene.add(coolRimLight);

    // 3. Moving Studio Grid / Tunnel Lights
    const lightPillarsGroup = new THREE.Group();
    scene.add(lightPillarsGroup);

    const pillarGeometry = new THREE.BoxGeometry(0.15, 0.15, 6);
    const goldPillarMat = new THREE.MeshBasicMaterial({ color: 0xdec07e });
    const whitePillarMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const pillars: THREE.Mesh[] = [];
    const NUM_LIGHTS = 18;
    for (let i = 0; i < NUM_LIGHTS; i++) {
      const zPos = -i * 5;
      // Left ceiling light strip
      const leftPillar = new THREE.Mesh(pillarGeometry, i % 2 === 0 ? goldPillarMat : whitePillarMat);
      leftPillar.position.set(-2.5, 3.2, zPos);
      lightPillarsGroup.add(leftPillar);
      pillars.push(leftPillar);

      // Right ceiling light strip
      const rightPillar = new THREE.Mesh(pillarGeometry, i % 2 === 0 ? goldPillarMat : whitePillarMat);
      rightPillar.position.set(2.5, 3.2, zPos);
      lightPillarsGroup.add(rightPillar);
      pillars.push(rightPillar);
    }

    // 4. Studio Floor Grid with High-Gloss Reflections
    const floorGeo = new THREE.PlaneGeometry(30, 100);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x050608,
      roughness: 0.15,
      metalness: 0.85
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, -25);
    scene.add(floor);

    // Grid lines on floor
    const gridHelper = new THREE.GridHelper(100, 50, 0xc5a059, 0x1a1e28);
    gridHelper.position.set(0, 0.02, -25);
    scene.add(gridHelper);

    // 5. Stylized 3D Supercar Cockpit & Hood Geometry
    const carGroup = new THREE.Group();
    scene.add(carGroup);

    // Hood / Front Bonnet
    const hoodGeo = new THREE.BoxGeometry(2.1, 0.25, 3.6);
    const carPaintMat = new THREE.MeshStandardMaterial({
      color: 0x111318,
      roughness: 0.08,
      metalness: 0.95
    });
    const hood = new THREE.Mesh(hoodGeo, carPaintMat);
    hood.position.set(0, 0.75, -2.4);
    hood.rotation.x = 0.05;
    carGroup.add(hood);

    // Twin Carbon Aerodynamic Hood Vents
    const ventGeo = new THREE.BoxGeometry(0.4, 0.05, 1.2);
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.4 });
    const ventLeft = new THREE.Mesh(ventGeo, carbonMat);
    ventLeft.position.set(-0.55, 0.88, -2.2);
    carGroup.add(ventLeft);
    const ventRight = new THREE.Mesh(ventGeo, carbonMat);
    ventRight.position.set(0.55, 0.88, -2.2);
    carGroup.add(ventRight);

    // Front Headlight Glow Projectors
    const headlightGeo = new THREE.BoxGeometry(0.35, 0.1, 0.6);
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0x90d4ff });
    const headlightL = new THREE.Mesh(headlightGeo, headlightMat);
    headlightL.position.set(-0.85, 0.75, -4.1);
    carGroup.add(headlightL);
    const headlightR = new THREE.Mesh(headlightGeo, headlightMat);
    headlightR.position.set(0.85, 0.75, -4.1);
    carGroup.add(headlightR);

    // Dashboard & Steering Wheel for Cockpit POV
    const dashGeo = new THREE.BoxGeometry(1.8, 0.35, 1.1);
    const dashMat = new THREE.MeshStandardMaterial({ color: 0x090a0d, roughness: 0.7 });
    const dashboard = new THREE.Mesh(dashGeo, dashMat);
    dashboard.position.set(0, 0.95, -0.4);
    carGroup.add(dashboard);

    // Steering Wheel
    const wheelTorusGeo = new THREE.TorusGeometry(0.32, 0.035, 12, 32);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x15171d, metalness: 0.5, roughness: 0.3 });
    const steeringWheel = new THREE.Mesh(wheelTorusGeo, wheelMat);
    steeringWheel.position.set(-0.35, 1.05, 0.05);
    steeringWheel.rotation.x = 0.35;
    carGroup.add(steeringWheel);

    // Center 12 o'clock Gold Marker on Steering Wheel
    const markerGeo = new THREE.BoxGeometry(0.04, 0.08, 0.08);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xc5a059 });
    const wheelMarker = new THREE.Mesh(markerGeo, markerMat);
    wheelMarker.position.set(0, 0.32, 0);
    steeringWheel.add(wheelMarker);

    // 6. Rain / Water Droplets on Windshield Simulation
    const dropletCount = 120;
    const dropletGeo = new THREE.SphereGeometry(0.018, 8, 8);
    const dropletMat = new THREE.MeshStandardMaterial({
      color: 0xc0e4ff,
      roughness: 0.05,
      metalness: 0.2,
      transparent: true,
      opacity: 0.7
    });

    const dropletsGroup = new THREE.Group();
    scene.add(dropletsGroup);

    const dropletMeshes: { mesh: THREE.Mesh; speedX: number; speedY: number; speedZ: number; initialY: number }[] = [];
    for (let i = 0; i < dropletCount; i++) {
      const mesh = new THREE.Mesh(dropletGeo, dropletMat);
      mesh.position.set(
        (Math.random() - 0.5) * 1.6,
        1.05 + Math.random() * 0.45,
        -0.3 - Math.random() * 0.5
      );
      dropletsGroup.add(mesh);
      dropletMeshes.push({
        mesh,
        speedX: (Math.random() - 0.5) * 0.005,
        speedY: 0.003 + Math.random() * 0.008,
        speedZ: 0.015 + Math.random() * 0.03,
        initialY: mesh.position.y
      });
    }

    // 7. Golden Laser Scan Ring (PPF / Ceramic Coating inspection sweep)
    const scanRingGeo = new THREE.RingGeometry(0.1, 1.8, 32);
    const scanRingMat = new THREE.MeshBasicMaterial({
      color: 0xc5a059,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat);
    scanRing.rotation.x = Math.PI / 2;
    scanRing.position.set(0, 0.85, -2.5);
    scene.add(scanRing);

    // Mouse / Touch Move Listener for interactive 3D steering
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 to 1
      targetSteerRef.current = (x - 0.5) * 2; // -1 to +1
    };

    container.addEventListener('pointermove', handlePointerMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Steering physics interpolation (smooth damping)
      currentSteerRef.current += (targetSteerRef.current - currentSteerRef.current) * 0.08;
      const steer = currentSteerRef.current;

      // Rotate steering wheel
      steeringWheel.rotation.z = -steer * 0.85;

      // Subtle chassis roll & yaw based on steering
      carGroup.rotation.z = steer * 0.03;
      carGroup.rotation.y = -steer * 0.05;

      // Move ceiling light pillars backward to simulate forward speed
      const speedFactor = 28 * delta;
      pillars.forEach((pillar) => {
        pillar.position.z += speedFactor;
        if (pillar.position.z > 2) {
          pillar.position.z = -((NUM_LIGHTS - 1) * 5);
        }
      });

      // Gold scan beam animation
      scanRing.position.z = -1.0 - Math.sin(time * 2) * 2.2;
      scanRingMat.opacity = 0.2 + Math.abs(Math.sin(time * 3)) * 0.35;

      // Hydrophobic water droplets simulation
      dropletMeshes.forEach((d) => {
        if (hydrophobicActive) {
          // Ceramic Coated: Droplets sheet off rapidly up and backward over windshield
          d.mesh.position.y += d.speedY * 2.5;
          d.mesh.position.z += d.speedZ * 2.5;
          d.mesh.position.x += (d.mesh.position.x > 0 ? 0.005 : -0.005) + steer * 0.003;
          if (d.mesh.position.z > 0.4 || d.mesh.position.y > 1.6) {
            d.mesh.position.set(
              (Math.random() - 0.5) * 1.5,
              1.0 + Math.random() * 0.15,
              -0.7 - Math.random() * 0.2
            );
          }
        } else {
          // Uncoated: Droplets linger, pool, and smear
          d.mesh.position.y -= d.speedY * 0.3;
          if (d.mesh.position.y < 0.95) {
            d.mesh.position.y = 1.25;
          }
        }
      });

      // Camera placement based on active POV
      if (activePOV === 'cockpit') {
        camera.position.x = -0.35 + steer * 0.15;
        camera.position.y = 1.25;
        camera.position.z = 0.45;
        camera.lookAt(-0.35 + steer * 0.6, 1.05, -15);
      } else if (activePOV === 'hood') {
        camera.position.x = steer * 0.2;
        camera.position.y = 0.98;
        camera.position.z = -1.8;
        camera.lookAt(steer * 0.8, 0.92, -20);
      } else if (activePOV === 'studio') {
        // Orbit around vehicle
        const radius = 4.5;
        const angle = time * 0.3 + steer * 0.8;
        camera.position.x = Math.sin(angle) * radius;
        camera.position.z = -2.2 + Math.cos(angle) * radius;
        camera.position.y = 1.6;
        camera.lookAt(0, 0.8, -2.2);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      renderer.dispose();
    };
  }, [activePOV, hydrophobicActive]);

  // Simulate dynamic speed / RPM acceleration pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(Math.floor(180 + Math.sin(Date.now() / 600) * 12));
      setRpm(Math.floor(6300 + Math.sin(Date.now() / 400) * 450));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const triggerHydrophobicWash = () => {
    setIsWaterSpraying(true);
    setHydrophobicActive(true);
    setTimeout(() => {
      setIsWaterSpraying(false);
    }, 2500);
  };

  return (
    <section className="relative w-full bg-[#08090B] py-14 sm:py-20 border-t border-b border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-[#141824]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#12141A] border border-[#C5A059]/40 text-[#DEC07E] text-[11px] font-semibold uppercase tracking-widest mb-3"
            >
              <Zap className="w-3.5 h-3.5 text-[#C5A059]" />
              Interactive 3D Detailing Bay
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
            >
              Experience The Car POV <span className="gold-gradient-text">& Optical Clarity</span>
            </motion.h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9E9EA7] max-w-md">
            Drag or tilt to steer. Switch between Cockpit, Aero Hood, and Studio Bay camera angles to test 9H hydrophobic beading and laser inspection clarity in real-time 3D.
          </p>
        </div>

        {/* 3D Viewport Box */}
        <div
          ref={containerRef}
          className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] bg-[#050608] rounded-xl border border-[#C5A059]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden select-none cursor-grab active:cursor-grabbing group"
        >
          {/* Three.js Canvas */}
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Laser Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(8,9,11,0.7)_100%)] pointer-events-none" />

          {/* Top HUD Bar */}
          <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between pointer-events-auto">
            {/* Camera POV Switcher */}
            <div className="flex items-center gap-1 sm:gap-2 bg-[#0C0E14]/90 p-1 sm:p-1.5 rounded-lg border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActivePOV('cockpit')}
                className={`px-2.5 sm:px-3 py-1.5 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePOV === 'cockpit'
                    ? 'bg-[#C5A059] text-black shadow-md'
                    : 'text-[#9E9EA7] hover:text-white hover:bg-white/5'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Driver</span> Cockpit
              </button>

              <button
                type="button"
                onClick={() => setActivePOV('hood')}
                className={`px-2.5 sm:px-3 py-1.5 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePOV === 'hood'
                    ? 'bg-[#C5A059] text-black shadow-md'
                    : 'text-[#9E9EA7] hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Aero Hood
              </button>

              <button
                type="button"
                onClick={() => setActivePOV('studio')}
                className={`px-2.5 sm:px-3 py-1.5 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePOV === 'studio'
                    ? 'bg-[#C5A059] text-black shadow-md'
                    : 'text-[#9E9EA7] hover:text-white hover:bg-white/5'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                360° Bay
              </button>
            </div>

            {/* Studio Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#0C0E14]/90 rounded-lg border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold text-[#DEC07E]">
                CLIMATE: 21°C • 45% HUMIDITY
              </span>
            </div>
          </div>

          {/* Bottom HUD Dashboard Controls */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-auto">
            {/* Speedometer & RPM Gauges */}
            <div className="bg-[#0C0E14]/90 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg border border-white/10 backdrop-blur-md flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-around sm:justify-start">
              <div>
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-[#9E9EA7]">
                  <Gauge className="w-3 h-3 text-[#C5A059]" />
                  Velocity
                </div>
                <div className="font-mono text-base sm:text-xl font-bold text-white flex items-baseline gap-1">
                  <span>{speed}</span>
                  <span className="text-[10px] text-[#C5A059]">KM/H</span>
                </div>
              </div>

              <div className="h-7 w-px bg-white/10" />

              <div>
                <div className="text-[10px] uppercase font-bold text-[#9E9EA7]">Tachometer</div>
                <div className="font-mono text-base sm:text-xl font-bold text-[#DEC07E] flex items-baseline gap-1">
                  <span>{rpm}</span>
                  <span className="text-[10px] text-[#9E9EA7]">RPM</span>
                </div>
              </div>

              <div className="h-7 w-px bg-white/10 hidden xs:block" />

              <div className="hidden xs:block">
                <div className="text-[10px] uppercase font-bold text-[#9E9EA7]">Film Shield</div>
                <div className="text-xs font-semibold text-[#25D366] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Self-Healing
                </div>
              </div>
            </div>

            {/* Hydrophobic Beading Interactive Trigger */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={triggerHydrophobicWash}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                  hydrophobicActive
                    ? 'bg-[#122B1E] border-[#25D366]/60 text-[#25D366] hover:bg-[#183626]'
                    : 'bg-[#181B24] border-white/10 text-white hover:border-[#C5A059]'
                }`}
              >
                <Droplets className={`w-4 h-4 ${isWaterSpraying ? 'animate-bounce text-[#68D391]' : ''}`} />
                <span>
                  {isWaterSpraying ? 'Sheeting Water Off...' : 'Test Hydrophobic Beading'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setHydrophobicActive(!hydrophobicActive)}
                title="Toggle 9H Ceramic Active"
                className="p-2.5 rounded-lg bg-[#0C0E14]/90 border border-white/10 text-[#DEC07E] hover:text-white hover:border-[#C5A059] transition-all cursor-pointer backdrop-blur-md"
              >
                <RefreshCw className={`w-4 h-4 ${hydrophobicActive ? 'text-[#C5A059]' : 'text-[#64646D]'}`} />
              </button>
            </div>
          </div>

          {/* Steer Guide Prompt */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <span className="px-3 py-1 bg-black/60 rounded-full text-[11px] uppercase tracking-wider text-white border border-white/10 backdrop-blur-sm">
              Move Mouse / Swipe To Steer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
