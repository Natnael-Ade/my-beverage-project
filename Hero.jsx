import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [showFanta, setShowFanta] = useState(false);

  const leaves = [
    { id: 1, top: '15%', left: '10%', rotate: -15, depth: 0.3 },
    { id: 2, top: '20%', left: '80%', rotate: 25, depth: 0.6 },
    { id: 3, top: '70%', left: '15%', rotate: 10, depth: 0.4 },
    { id: 4, top: '65%', left: '75%', rotate: -20, depth: 0.5 }
  ];

  return (
    <div className={`hero-container ${showFanta ? 'fanta-active' : ''}`}>
      {/* Sprite Section */}
      <section className="hero sprite-hero">
        <h1 className="hero-title">SPRITE</h1>
        <img
          src="https://i.postimg.cc/XY42pLnk/image-fx-4-removebg-preview.png"
          alt="Sprite Can"
          className="hero-image"
        />
      </section>

      {/* Fanta Section */}
      <section className="hero fanta-hero">
        <h1 className="hero-title">FANTA</h1>
        <img
          src="https://i.postimg.cc/VkNb500V/image-fx-5-removebg-preview.png"
          alt="Fanta Can"
          className="hero-image"
        />
      </section>

      {/* Single Set of Leaves */}
      {leaves.map(leaf => (
        <motion.img
          key={`leaf-${leaf.id}`}
          src="https://i.postimg.cc/5tGjkP0B/image-fx-1-removebg-preview.png"
          className="leaf"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: showFanta ? -100 * leaf.depth : 0,
            y: showFanta ? -100 : 0
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: leaf.depth * 0.1
          }}
          style={{
            top: leaf.top,
            left: leaf.left,
            rotate: leaf.rotate
            // No filter here anymore — original color
          }}
          whileHover={{
            scale: 1.1,
            rotate: leaf.rotate + (showFanta ? -10 : 10),
            transition: { duration: 0.5 }
          }}
          alt="leaf decoration"
        />
      ))}

      <button
        className="switch-button"
        onClick={() => setShowFanta(!showFanta)}
      >
        {showFanta ? 'Show Sprite' : 'Show Fanta'}
      </button>
    </div>
  );
};

export default Hero;
