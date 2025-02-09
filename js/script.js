
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // Adjust for a smoother effect
    infinite: false
  });
  
  // ✅ Ensure smooth scrolling works
  lenis.on("scroll", ScrollTrigger.update);
  
  // ✅ Use requestAnimationFrame (Important for Lenis)
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  // ✅ GSAP Ticker for Lenis
  gsap.ticker.add((time) => {
    lenis.raf(time);
  });
  gsap.ticker.lagSmoothing(0);
  
  // ✅ Create a ScrollTrigger animation
  ScrollTrigger.create({
    trigger: ".pinned",
    start: "top top",
    endTrigger: ".whitespace",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });