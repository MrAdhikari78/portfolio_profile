import { useEffect, useRef, useContext } from 'react';
import { ThemeProviderContext } from './theme-provider';

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const themeContext = useContext(ThemeProviderContext);

  useEffect(() => {
    const initializeParticles = async () => {
      // Ensure container exists and is mounted
      if (!containerRef.current) {
        return;
      }

      // Check if particles.js is already loaded
      if (typeof (window as any).particlesJS !== 'undefined') {
        initializeParticlesJS();
        return;
      }

      // Load particles.js library from CDN
      return new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => {
          console.log('Particles.js loaded successfully');
          initializeParticlesJS();
          resolve();
        };
        script.onerror = () => {
          console.error('Failed to load particles.js library');
          resolve();
        };
        document.head.appendChild(script);
      });
    };

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      initializeParticles();
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [themeContext?.resolvedTheme]);

  const initializeParticlesJS = () => {
    if (typeof (window as any).particlesJS === 'undefined') {
      console.error('particlesJS not available');
      return;
    }

    try {
      // Ensure container has dimensions
      if (containerRef.current) {
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = '100%';
      }

      // Determine colors based on theme
      const isDarkMode = themeContext?.resolvedTheme === 'dark';
      const particleColor = isDarkMode ? '#ffffff' : '#000000';
      const lineColor = isDarkMode ? '#ffffff' : '#000000';

      (window as any).particlesJS('particles-js', {
        particles: {
          number: {
            value: 75,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: particleColor,
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: particleColor,
            },
            polygon: {
              nb_sides: 6,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 140,
            color: lineColor,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'top',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        stats: {
          enable: true,
          position: 'top-left',
        },
      });

      console.log('Particles initialized successfully with theme:', isDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  };

  return (
    <div
      ref={containerRef}
      id="particles-js"
      className="fixed inset-0 z-0"
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
        mixBlendMode: 'normal',
      }}
    />
  );
};
