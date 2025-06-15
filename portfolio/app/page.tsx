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
        <div id="section-nav" className="z-10 flex fixed w-full pt-[24px] pl-[48px] pr-[48px] bg-linear-[#0006,#0000]">
              <Navbar />
        </div>
        <div id="smooth-scroll">
          <div id="smooth-content">
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
            <div id="section-footer" className="flex relative border-t-[1px] border-t-[#f2f2f21a] pt-[88px] pb-[80px] px-[48px]">
              <div id="container-footer" className="flex flex-col w-full gap-[64px]">
                <div id="footer-top" className="flex justify-between">
                  <Image src="/logo.svg" className="inline" width="42" height="42" alt="Logo"></Image>
                  <div id="footer-links-wrapper" className="flex gap-[32px]">
                    <div id="footer-links-column" className="flex flex-col gap-[16px] w-[80px]"> 
                      <div id="text-footer-header" className="opacity-50 tracking-[1.5px] leading-[13px] text-[9px] font-medium">MAIN</div>
                      <div id="footer-links-wrapper" className="flex flex-col gap-[8px]">
                        <Link id="work-link" className="flex gap-[4px] items-center h-[40px]" href="">
                          <div className="tracking-[0.2px] font-medium text-[16px]">Work</div>
                        </Link>
                        <Link id="info-link" className="flex gap-[4px] items-center h-[40px]" href="">
                          <div className="tracking-[0.2px] font-medium text-[16px]">Info</div>
                        </Link>
                      </div>
                    </div>
                    <div id="footer-links-column" className="flex flex-col gap-[16px] w-[80px]"> 
                      <div id="text-footer-header" className="opacity-50 tracking-[1.5px] leading-[13px] text-[9px] font-medium">CONTACT</div>
                      <div id="footer-links-wrapper" className="flex flex-col gap-[8px]">
                        <a id="work-link" href="https://www.linkedin.com/in/rafil-alam-973759364/" target="_blank" className="flex items-center gap-[4px] h-[40px]">
                          <div className="tracking-[0.2px] font-medium text-[16px]">LinkedIn</div>
                          <Image src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" width="18" height="18" alt=""></Image>
                        </a>
                        <a id="info-link" href="https://github.com/RafilAlam" target="_blank" className="flex gap-[4px] items-center h-[40px]">
                          <div className="tracking-[0.2px] font-medium text-[16px]">GitHub</div>
                          <Image src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" width="18" height="18" alt=""></Image>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="footer-bottom" className="flex flex-1 align-end  justify-between">
                  <div id="bottom-left" className="flex flex-col flex-1 justify-end">
                    <div id="copyright" className="tracking-[0.2px] text-[16px] font-medium leading-[24px]">© 2025 Rafil Alam. All Rights Reserved.</div>
                    <div id="copyright-under" className="opacity-50 tracking-[0.2px] text-[14px]">Made with love and Iced Lemon Teas (50% sugar, less ice).</div>
                  </div>
                  <div id="bottom-right" className="flex flex-col flex-1 justify-end items-end">
                    <div id="message" className="opacity-50 tracking-[0.2px] leading-[20px] text-[12px] font-normal">Welcome to the end friend -<span className="text-[25px] font-bold transform translate-y-[1px] inline-block">☺</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed right-0 top-0 h-full w-1 bg-transparent z-50 pointer-events-none">
          <div id="fake-scrollbar" className="w-full bg-[#333333] rounded-full" style={{ height: '80px', transform: 'translateY(0px)' }}></div>
        </div>
      </div>
  );
}
