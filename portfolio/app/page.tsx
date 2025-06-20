"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import MobileHero from "@/components/ui/mobilehero";
import ProjectCard from "@/components/ui/projectcard"

export default function Home() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const arrowref = useRef(null);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-scroll",
      content: "#smooth-content",
      smooth: 1,
      normalizeScroll: true,
      effects: false,
    });

    return () => {
      // kills on unmount to prevent memory leak
      smootherRef.current?.kill();
    }
  })

  useEffect(() => {
    const scrollbar = document.getElementById('fake-scrollbar');
    if (!scrollbar) return;

    ScrollTrigger.addEventListener('refreshInit', () => {
      gsap.set(scrollbar, { y: 0 });
    });

    ScrollTrigger.create({
      start: 0,
      end: document.body.scrollHeight - window.innerHeight,
      onUpdate: self => {
        const scrollPercent = self.progress;
        const trackHeight = window.innerHeight;
        const thumbHeight = 80;
        const maxTranslate = trackHeight - thumbHeight;

        gsap.to(scrollbar, {
          y: scrollPercent * maxTranslate,
          ease: 'power2.out',
          duration: 0.2,
        });
      }
    });
  }, []);

  useEffect(() => {
    gsap.timeline({repeat: -1, repeatDelay: 0.5}).to(arrowref.current, {marginTop: "20px", opacity: 1, duration: 0.8, ease: "power4.out"}).to(arrowref.current, {marginTop: "0px", opacity: 0.5, duration: 1, ease: "power3.out"})
  }, [])

  return (
      <div id="body">
        <div id="section-nav" className="z-10 flex fixed w-full pt-[24px] pl-[24px] pr-[24px] sm:pl-[48px] sm:pr-[48px] bg-linear-[#0006,#0000]">
              <Navbar tab="1" />
        </div>
        <div id="smooth-scroll">
          <div id="smooth-content">
            <div id="section-hero" className="flex z-1 pt-[160px] pb-[4] pl-[48px] pr-[48px] justify-center relative bg-radial-[circle_closest-corner_at_50%_0,_#f2f2f226,_#0000]">
              <div id="hero-fade" className="hidden sm:flex absolute z-5 h-[200px] pt-[48px] inset-0 top-[auto] justify-center bg-linear-[to_bottom,_#10101000,_#101010_60%]">
                <div id="scroll-wrapper" className="">
                  <Image ref={arrowref} src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg" width="40" height="40" alt="" className="relative block opacity-50"></Image>
                </div>
              </div>
              <Hero />
              <MobileHero />
              <div id="hero-noise" className="z-0 top-0 absolute inset-0 w-full h-full opacity-20 bg-size-[200px] bg-blend-overlay bg-[url('https://web.archive.org/web/20240904144252im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')]"></div>
            </div>
            <div id="section-projects" className="z-1 w-full flex flex-col relative gap-[48px] pt-[24px] pb-[200px] pl-[28px] pr-[28px] items-center bg-[#101010]">
              <ProjectCard title="Art Buddy" href="https://github.com/RafilAlam/ArtBuddy-WebApp" glowcolor="#090315" company="Pasir Ris Secondary, '25" description="Giving student artists easy access to inspirational artworks." src="/project-thumbnails/artbuddy.png" />
              <ProjectCard title="AI Reader" href="https://github.com/RafilAlam/AI-Reader" glowcolor="#272828" company="Personal Project, '24" description="Providing researchers, the elderly and visually challenged readers a break." src="/project-thumbnails/ai-reader.png" />
              <ProjectCard title="TrackMate" href="https://github.com/RafilAlam/TrackMate-App" glowcolor="#1c1320" company="Personal Project, '23" description="Keeping track of what's important all in one place." src="/project-thumbnails/trackmate.png" />
            </div>
            <div id="section-footer" className="flex relative justify-center border-t-[1px] border-t-[#f2f2f21a] pt-[88px] pb-[80px] px-[20px] sm:px-[48px]">
              <Footer />
            </div>
          </div>
        </div>
        <div className="fixed right-0 top-0 h-full w-1 bg-transparent z-50 pointer-events-none">
          <div id="fake-scrollbar" className="w-full bg-[#333333] rounded-full" style={{ height: '80px', transform: 'translateY(0px)' }}></div>
        </div>
      </div>
  );
}
