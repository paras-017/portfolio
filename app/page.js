'use client'
import Hero from '@/components/Hero'
import canvasDots from './heroCanvas.js';
import { useEffect } from 'react';
export default function Home() {

  useEffect(() => {
    canvasDots();
  }, [])

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
