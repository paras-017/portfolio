'use client'
import Hero from '@/components/Hero'
import canvasDots from './heroCanvas.js';
export default function Home() {
  window.onload = function () {
    canvasDots();
  };
  return (
  <>
<div className="hero" id="hero">
        <div className="canvas">
          <canvas className="connecting-dots"></canvas>
        </div>
         <Hero/>
      </div>     
  </>
  )
}
