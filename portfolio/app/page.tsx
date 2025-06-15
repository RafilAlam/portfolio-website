"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import ProjectCard from "@/components/ui/projectcard"

export default function Home() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const arrowref = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-scroll",
      content: "#body",
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
    gsap.timeline({repeat: -1, repeatDelay: 0.5}).to(arrowref.current, {marginTop: "20px", opacity: 1, duration: 0.8, ease: "power4.out"}).to(arrowref.current, {marginTop: "0px", opacity: 0.5, duration: 1, ease: "power3.out"})
  }, [])

  return (
      <div id="smooth-scroll">
        <div id="body">
          <div id="section-nav" className="z-10 flex fixed w-full pt-[24px] pl-[48px] pr-[48px] bg-linear-[#0006,#0000]">
            <Navbar />
          </div>
          <div id="section-hero" className="flex z-1 pt-[160px] pb-[4] pl-[48px] pr-[48px] justify-center relative bg-radial-[circle_closest-corner_at_50%_0,_#f2f2f226,_#0000]">
            <div id="hero-fade" className="flex absolute z-5 h-[200px] pt-[48px] inset-0 top-[auto] justify-center bg-linear-[to_bottom,_#10101000,_#101010_60%]">
              <div id="scroll-wrapper" className="">
                <Image ref={arrowref} src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg" width="40" height="40" alt="" className="relative block opacity-50"></Image>
              </div>
            </div>
            <Hero />
            <div id="hero-noise" className="z-0 top-0 absolute inset-0 w-full h-full opacity-20 bg-size-[200px] bg-blend-overlay bg-[url('https://web.archive.org/web/20240904144252im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')]"></div>
          </div>
          <div id="section-projects" className="z-1 w-full flex flex-col relative gap-[48px] pt-[24px] pb-[200px] pl-[28px] pr-[28px] items-center bg-[#101010]">
            <ProjectCard title="Art Buddy" glowcolor="#035" company="Pasir Ris Secondary, '25" description="description" src="/project-thumbnails/artbuddy.png" />
            <ProjectCard title="Art Buddy" glowcolor="#035" company="Pasir Ris Secondary, '25" description="description" src="/project-thumbnails/artbuddy.png" />
            <ProjectCard title="Art Buddy" glowcolor="#035" company="Pasir Ris Secondary, '25" description="description" src="/project-thumbnails/artbuddy.png" />
          </div>
        </div>
      </div>
  );
}
