import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindcss3d from 'tailwindcss-3d';
import { PluginAPI } from "tailwindcss/types/config";

const generateRandomKeyframes = () => {
  const keyframes: { [key: string]: { transform: string } } = {};
  const firstX = Math.floor(Math.random() * 200) - 100;
  const firstY = Math.floor(Math.random() * 200) - 100;
  keyframes['0%'] = { transform: `translate(${firstX}px, ${firstY}px)` };

  for (let i = 10; i < 100; i += 10) {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    keyframes[`${i}%`] = { transform: `translate(${x}px, ${y}px)` };
  }

  keyframes['100%'] = { transform: `translate(${firstX}px, ${firstY}px)` };
  return keyframes;
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'orbit': 'orbital 30s linear infinite',
        'blob': 'blobAnimation 7s infinite',
        'circular': 'circular 10s linear infinite',
        'circular2': 'circular2 20s linear infinite',
        'random-circular': 'randomCircular 5s linear infinite',
        'random-circular2': 'randomCircular2 5s linear infinite',
      },
      keyframes: {
        blobAnimation: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.2) translate(20px, 20px)' },
        },
        circular: {
          '0%': { transform: 'translate(0, -100px)' },
          '25%': { transform: 'translate(100px, 0)' },
          '50%': { transform: 'translate(0, 100px)' },
          '75%': { transform: 'translate(-100px, 0)' },
          '100%': { transform: 'translate(0, -100px)' },
        },
        circular2: {
          '0%': { transform: 'translate(0, 100px)' },
          '25%': { transform: 'translate(-100px, 0)' },
          '50%': { transform: 'translate(0, -100px)' },
          '75%': { transform: 'translate(100px, 0)' },
          '100%': { transform: 'translate(0, 100px)' },
        },
        randomCircular: generateRandomKeyframes(),
        randomCircular2: generateRandomKeyframes(),
      },
    },
  },
  plugins: [
    tailwindcss3d({ legacy: true }),
    plugin(({ addUtilities }: PluginAPI) => {
      addUtilities({
        ".blend-overlay": {
          "mix-blend-mode": "overlay",
        },
        ".blur-80": {
          filter: "blur(80px)",
        },
        ".fade-out-bottom": {
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        },
        ".fade-out-circle": {
          maskImage: "radial-gradient(circle, black 50%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 70%)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        },
      });
    }),
  ],
} satisfies Config;
