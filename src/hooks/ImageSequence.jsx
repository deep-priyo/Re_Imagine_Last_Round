import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = () => {
  const canvasRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const images = useRef([]);
  const frames = { currentIndex: 0, maxIndex: 1441 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Adjust canvas dimensions based on the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Dynamically generate image URLs and preload images
    const preloadImages = async () => {
      const loadImages = [];

      for (let i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `/assets/frames/hui1/frame_${String(i).padStart(4, '0')}.jpeg`;

        console.log(`Loading image URL: ${imageUrl}`); // Log the URL for debugging

        loadImages.push(
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              console.log(`Successfully loaded image: ${imageUrl}`);
              resolve(img);
            };
            img.onerror = () => {
              console.error(`Failed to load image at: ${imageUrl}`);
              reject();
            };
          })
        );
      }

      try {
        images.current = await Promise.all(loadImages);
        console.log(`All images loaded, total: ${images.current.length}`);
        drawInitialFrame();
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    const drawInitialFrame = () => {
      if (ctx && images.current.length > 0) {
        ctx.drawImage(images.current[0], 0, 0, canvas.width, canvas.height);
      }
    };

    const updateFrame = (progress) => {
      const index = Math.floor(progress * (frames.maxIndex - 1));
      console.log(`Scroll progress: ${progress}, Image index: ${index}`);
      if (ctx && images.current[index]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
        ctx.drawImage(images.current[index], 0, 0, canvas.width, canvas.height);
      }
    };

    preloadImages();

    ScrollTrigger.create({
      trigger: canvasRef.current,
      start: 'top top',
      end: `+=${frames.maxIndex * 0.5}`, // Adjust the end value based on your scroll needs
      scrub: true,
      pin: true, // Keep the canvas pinned while scrolling
      onUpdate: (self) => updateFrame(self.progress),
      // markers: true, // Comment out or remove this line for production
    });

    // Add ScrollTrigger to control text appearance and disappearance
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: canvasRef.current,
        start: 'top top',
        end: `+=${frames.maxIndex * 0.5}`, // Match the image sequence scroll distance
        scrub: true,
         // Comment out or remove for production
      },
    });

    // Define when the text elements should appear and disappear
    textTimeline
      .fromTo(textRef1.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.1)
      .to(textRef1.current, { opacity: 0, duration: 0.5 }, 0.3)
      .fromTo(textRef2.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.5)
      .to(textRef2.current, { opacity: 0, duration: 0.5 }, 0.7);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
    
    </div>
  );
};

export default ImageSequence;
