"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Header from "@/components/ui/header";
import ProjectCard from "@/components/ui/projectcard"
import ImgCard from "@/components/ui/imgcard";

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
              <Navbar tab="2" />
        </div>
        <div id="smooth-scroll">
          <div id="smooth-content">
            <div id="bg" className="bg-radial-[circle_closest-corner_at_50%_0,_#f2f2f226,_#0000]">
                <div id="section-about" className="flex flex-col relative gap-[80px] mx-[auto] z-1 pt-[172px] pb-[120px] lg:px-[0px] px-[48px]  lg:max-w-[1044px] justify-center">
                  <div id="fade" className="z-5 flex flex-col absolute inset-0 top-[auto] items-center h-[200px] pt-[48px] bg-linear-[to_bottom,_#10101000,_#101010_60%]">
                  </div>
                  <div id="title-wrapper" className="flex flex-col gap-[24px]">
                      <Header text="ABOUT ME" />
                      <div id="text-hero" className="lg:text-[56px] text-[42px] font-medium lg:leading-[56px] leading-[110%] tracking-[-1px] text-shadow-[0_4px_10px_#0057ff33,_0_-4px_10px_#ff5a0026,_0_0_30px_#fff3]">I'm passionate about creating beautiful products that <span id="text-hero-serif" className="font-gloock italic bg-clip-text text-transparent bg-linear-[to_bottom,_#f2f2f2_50%,_#f2f2f233] text-shadow-[0_4px_6px_#0057ff26,_0_-4px_6px_#ff5a001a,_0_0_20px_#ffffff40]">solve real problems.</span></div>
                  </div>
                  <div id="info-block" className="grid grid-cols-2 gap-[48px]">
                    <div id="col-left" className="flex flex-col relative w-full z-3">
                      <ImgCard />
                      <div id="text" className="flex flex-1 px-[24px] tracking-[0.4px] leading-[150%] text-[16px] font-light text-[#f2f2f299]">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]"></span>
                      </div>
                    </div>
                    <div id="col-right" className="flex flex-col relative w-full z-3 gap-[48px] pt-[48px]">
                      <div id="text">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]"></span>
                      </div>
                      <ImgCard />
                    </div>
                  </div>
                  <div id="hero-noise" className="z-0 absolute inset-0 w-full h-full opacity-20 bg-size-[200px] bg-blend-overlay bg-[url('https://web.archive.org/web/20240904144252im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')]"></div>
                </div>
              
                <div id="section-divider" className="flex flex-col items-center">
                  <div id="container-general" className="flex flex-col w-[882px] gap-[96px]">
                    <div id="divider-wrapper" className="flex gap-[8px] items-center">
                      <div id="divider-line" className="flex-1 h-[1px] bg-[#f2f2f233]"></div>
                    </div>
                  </div>
                </div>
              
                <div id="section-experience" className="flex flex-col pt-[72px] pb-[120px] relative z-1 gap-[56px] items-center">
                  <div id="content" className="flex flex-col gap-[64px] align-start w-[882px]">
                    <Header text="EXPERIENCE" />
                    <div id="block" className="grid gap-x-[48px] gap-y-[16px] justify-between grid-cols-2">
                      <div id="content-leading" className="flex flex-col gap-[16px] font-medium -tracking-[0.1px] text-[40px] leading-[125%]">Pasir Ris Secondary</div>
                      <div id="content-experience" className="flex flex-col gap-[20px] pt-[20px]">
                        <div id="title-date" className="flex flex-col gap-[8px]">
                          <div id="title" className="tracking-[0.1px] shrink-[auto] pr-[24px] text-[24px] font-medium leading-[125%]">Chairperson of Tinkers' Club</div>
                          <div id="date" className="text-[#f2f2f266] text-[16px] font-normal leading-[125%]">05/'24 - 06/'25</div>
                        </div>
                        <div id="body-info" className="flex-1 leading-[150%] font-normal tracking-[0.4px] text-[16px] text-[#f2f2f299]">I ran Tinkers' Club and managed activities for members.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="section-footer" className="flex relative justify-center border-t-[1px] border-t-[#f2f2f21a] pt-[88px] pb-[80px] px-[48px]">
                  <Footer />
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
