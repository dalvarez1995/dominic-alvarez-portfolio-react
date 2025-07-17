import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles-background"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            resize: {
              enable: true
            }
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.3,
              size: 20
            }
          }
        },
        particles: {
          color: {
            value: ["#3b82f6", "#10b981", "#60a5fa", "#34d399"]
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 40
          },
          opacity: {
            value: 0.2
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground;
