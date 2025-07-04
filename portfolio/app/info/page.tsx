"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ImgCard from "@/components/ui/imgcard";
import SmallCard from "@/components/ui/smallcard";

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
        <div id="section-nav" className="z-10 flex fixed w-full pt-[24px] px-[24px] sm:px-[48px] bg-linear-[#0006,#0000]">
              <Navbar tab="2" />
        </div>
        <div id="smooth-scroll">
          <div id="smooth-content">
            <div id="bg" className="bg-radial-[circle_closest-corner_at_50%_0,_#f2f2f226,_#0000]">
                <div id="section-about" className="flex flex-col relative gap-[40px] sm:gap-[80px] mx-[auto] z-1 pt-[144px] sm:pt-[172px] sm:pb-[120px] lg:px-[0px] sm:px-[48px] px-[16px] pb-[40px] sm:pb-0 lg:max-w-[1044px] justify-center">
                  <div id="fade" className="hidden sm:flex z-5 flex flex-col absolute inset-0 top-[auto] items-center h-[200px] pt-[48px] bg-linear-[to_bottom,_#10101000,_#101010_60%]">
                  </div>
                  <div id="title-wrapper" className="flex flex-col gap-[24px]">
                      <Header text="ABOUT ME" />
                      <div id="text-hero" className="lg:text-[56px] sm:text-[42px] text-[7.9vw] font-medium lg:leading-[56px] leading-[110%] sm:tracking-[-1px] -tracking-[0.1vw] text-shadow-[0_4px_10px_#0057ff33,_0_-4px_10px_#ff5a0026,_0_0_30px_#fff3]">I&apos;m passionate about creating beautiful products that <span id="text-hero-serif" className="font-gloock italic bg-clip-text text-transparent bg-linear-[to_bottom,_#f2f2f2_50%,_#f2f2f233] text-shadow-[0_4px_6px_#0057ff26,_0_-4px_6px_#ff5a001a,_0_0_20px_#ffffff40]">solve real problems.</span></div>
                  </div>
                  <div id="info-block" className="flex flex-col-reverse sm:grid grid-cols-2 gap-[48px]">
                    <div id="col-left" className="flex flex-col gap-[48px] relative w-full z-3">
                      <ImgCard src="/info-pictures/main.jpeg" />
                      <div id="text" className="flex flex-col flex-1 gap-[24px] px-[24px] tracking-[0.4px] leading-[150%] text-[16px] text-[#f2f2f299]">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">My Background in Computer Science.</span>
                        <div>In February of 2017, when I was just 8, I joined my first CCA Club - Media and IT. I became captivated by how seemingly simple blocks of code could be so powerful.</div>
                        <div>Through putting my own projects together in Scratch, and playing around with the logic surrounding it, this rising curiosity and underlying passion kept building up.</div>
                      </div>
                    </div>
                    <div id="col-right" className="flex sm:flex-col flex-col-reverse relative w-full z-3 gap-[48px] sm:pt-[48px]">
                      <div id="text">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">This is my story — alongside some flicks from my recent competition at SUTD.</span>
                      </div>
                      <ImgCard src="/info-pictures/groupwork.JPG" />
                    </div>
                  </div>
                  <div id="info-block" className="flex flex-col-reverse sm:grid grid-cols-2 gap-[48px]">
                    <div id="col-left" className="flex flex-col gap-[48px] relative w-full z-3">
                      <ImgCard src="/info-pictures/leaning.jpeg" />
                      <div id="text" className="flex flex-col flex-1 gap-[24px] px-[24px] tracking-[0.4px] leading-[150%] text-[16px] text-[#f2f2f299]">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">Making it all happen.</span>
                        <div>Armed with a family laptop, I spent my free time chasing every bit of tech knowledge I could find. Each new concept, from Python&apos;s clarity to C&apos;s complexity and understanding how computers truly work felt like a natural puzzle to solve. This led me deeper into the craft.</div>
                        <div>As I progressed to secondary education, I proudly represented my school in various competitions, bringing home significant achievements.</div>
                      </div>
                    </div>
                    <div id="col-right" className="flex sm:flex-col flex-col-reverse relative w-full z-3 gap-[48px] sm:pt-[48px]">
                      <div id="text" className="flex flex-col gap-[24px] px-[24px] tracking-[0.4px] leading-[150%] text-[16px] text-[#f2f2f299]">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">But, I wanted more.</span>
                        <div>Though I loved the freedom of practicing computer science, I was greatly dissatisfied with just how slow the activities actually moved.</div>
                        <div>I wanted to push my learning at a faster pace and delve into more of what my mind was itching to get into.</div>
                      </div>
                      <ImgCard src="/info-pictures/robotics.JPG" />
                    </div>
                  </div>
                  <div id="info-block" className="flex flex-col-reverse sm:grid grid-cols-2 gap-[48px]">
                    <div id="col-left" className="flex flex-col gap-[48px] relative w-full z-3">
                      <ImgCard src="/info-pictures/gazing.jpeg" />
                      <div id="text" className="flex flex-col flex-1 gap-[24px] px-[24px] tracking-[0.4px] leading-[150%] text-[16px] text-[#f2f2f299]">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">In my spare time,</span>
                        <div>I&apos;m probably diving into more projects that spark my interest, or simply hanging out friends.</div>
                        <div>Other than that, you&apos;ll find me playing badminton and football, hitting the gym, gaming and reading up on the latest tech.</div>
                        <br />
                        <div id="signing" >
                          <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">Thanks for stopping by!</span>
                          <div id="signature" className="font-yellowtail text-[48px] leading-[1.2] py-2 bg-gradient-to-b from-[#f2f2f2cc] via-[#f2f2f299] to-[#f2f2f266] bg-clip-text text-transparent">Rafil</div>
                        </div>
                      </div>
                    </div>
                    <div id="col-right" className="flex sm:flex-col flex-col-reverse relative w-full z-3 gap-[48px] sm:pt-[48px]">
                      <div id="text" className="flex flex-col gap-[24px] px-[24px] tracking-[0.4px] leading-[150%] text-[16px] text-[#f2f2f299]">
                        <span id="emphasis" className="text-[18px] font-medium tracking-[0.4px] leading-[150%] text-[#f2f2f2e6]">Using what I loved.</span>
                        <div>My passion for software extended to teaching, where I regularly guided other students in my free time, sharing my knowledge to help them discover the same joy.</div>
                        <div>I also jumped into freelance work, where I applied my knowledge in the real world. I built some amazing connections, earning reliable pocket money from clients who genuinely love the projects I build.</div>
                      </div>
                      <ImgCard src="/info-pictures/seated2.jpg" />
                    </div>
                  </div>
                  <div id="hero-noise" className="z-0 absolute inset-0 w-full h-full opacity-20 bg-size-[200px] bg-blend-overlay bg-[url('https://web.archive.org/web/20240904144252im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')]"></div>
                </div>
              
                <div id="section-divider" className="flex flex-col items-center">
                  <div id="container-general" className="flex flex-col w-full sm:w-[882px] gap-[96px]">
                    <div id="divider-wrapper" className="flex gap-[8px] items-center">
                      <div id="divider-line" className="flex-1 h-[1px] bg-[#f2f2f233]"></div>
                    </div>
                  </div>
                </div>
              
                <div id="section-experience" className="flex flex-col pt-[56px] sm:pt-[72px] px-[16px] sm:px-0 pb-[120px] relative z-1 gap-[56px] items-center">
                  <div id="content" className="flex flex-col gap-[32px] sm:gap-[64px] align-start lg:w-[1044px] sm:w-[882px]">
                    <Header text="EXPERIENCE" />
                    <div id="block" className="flex flex-col sm:grid gap-x-[48px] gap-y-[16px] justify-between grid-cols-2">
                      <div id="content-leading" className="flex flex-col gap-[16px] font-medium -tracking-[0.1px] text-[40px] leading-[125%]">Rimebound Studios</div>
                      <div id="content-experience" className="flex flex-col gap-[20px] pt-[20px]">
                        <div id="title-date" className="flex flex-col gap-[8px]">
                          <div id="title" className="tracking-[0.1px] shrink-[auto] pr-[24px] text-[24px] font-medium leading-[125%]">Contract Game Developer</div>
                          <div id="date" className="text-[#f2f2f266] text-[16px] font-normal leading-[125%]">09/&apos;24 - Present</div>
                        </div>
                        <div id="body-info" className="flex-1 leading-[150%] font-normal tracking-[0.4px] text-[16px] text-[#f2f2f299]"> I take on responsibilities - mentoring developers, building requested features and optimising the existing codebase.</div>
                      </div>
                    </div>
                    <div id="block" className="flex flex-col sm:grid gap-x-[48px] gap-y-[16px] justify-between grid-cols-2">
                      <div id="content-leading" className="flex flex-col gap-[16px] font-medium -tracking-[0.1px] text-[40px] leading-[125%]">Pasir Ris Secondary</div>
                      <div id="content-experience" className="flex flex-col gap-[20px] pt-[20px]">
                        <div id="title-date" className="flex flex-col gap-[8px]">
                          <div id="title" className="tracking-[0.1px] shrink-[auto] pr-[24px] text-[24px] font-medium leading-[125%]">Chairperson of Tinkers&apos; Club</div>
                          <div id="date" className="text-[#f2f2f266] text-[16px] font-normal leading-[125%]">05/&apos;24 - Present</div>
                        </div>
                        <div id="body-info" className="flex-1 leading-[150%] font-normal tracking-[0.4px] text-[16px] text-[#f2f2f299]"> I lead club operations, mentor members in programming, lead teams to competition goals, and independently develop software to optimise school functions.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="section-divider" className="flex flex-col items-center">
                  <div id="container-general" className="flex flex-col w-full sm:w-[882px] gap-[96px]">
                    <div id="divider-wrapper" className="flex gap-[8px] items-center">
                      <div id="divider-line" className="flex-1 h-[1px] bg-[#f2f2f233]"></div>
                    </div>
                  </div>
                </div>

                <div id="section-" className="flex flex-col pt-[56px] sm:pt-[72px] px-[16px] sm:px-0 pb-[120px] relative z-1 items-center">
                  <div id="content" className="flex flex-col gap-[64px] align-start lg:w-[1044px] sm:w-[882px]">
                    <Header text="RECOGNITION" />
                    
                    <div id="block" className="flex flex-col gap-[20px]">
                      <div id="block-title" className="flex items-center gap-3 text-[24px] font-medium">
                        <div id="title">Awards</div>
                        <a id="view-button" className="text-[14px] hover:opacity-100 opacity-80 bg-linear-[190deg,_#252525,_#101010] shadow-[inset_0_0_10px_#0000001a,_0_0_12px_#0006] hover:border-[#888] transition-colors duration-400 ease-[cubic-bezier(.165,.84,.44,1)] border-[#3d3d3d] border-[1px] rounded-[10px] p-1 px-2" href="https://github.com/RafilAlam/Awards" target="_blank">View more</a>
                      </div>
                      <div id="row" className="grid gap-x-[16px] gap-y-[16px] justify-between sm:grid-cols-2">
                            <SmallCard title="🥈SUTD" company="Silver Medal Award C++ / Robotics" description="" glowcolor="#195a9b" src="awards/roboroarz.png" href="https://github.com/RafilAlam/Awards/blob/main/SUTD%20RoboRoarZ%20-%20Silver%20Award.pdf" />
                            <SmallCard title="🥉NYAA" company="Bronze Level Award VIA" description="" glowcolor="#d1af7b" src="awards/nyaa.png" href="https://github.com/RafilAlam/Awards/blob/main/NYAA%20-%20Bronze%20Award.pdf" />
                            <SmallCard title="Pasir Ris Secondary" company="Best Team Player Award" description="" glowcolor="#2f6e2b" src="awards/prss.png" href="https://github.com/RafilAlam/Awards/blob/main/Camp%20Conquest%20-%20Best%20Team%20Player%20Award.pdf" />
                            <SmallCard title="Singapore Polytechnic" company="Young Engineer Award" description="" glowcolor="#770000" src="awards/sp.png" href="https://github.com/RafilAlam/Awards/blob/main/Young%20Engineer%20Award%20-%20Singapore%20Polytechnic.pdf" />
                      </div>
                    </div>

                    <div id="block" className="flex flex-col gap-[20px]">
                      <div id="block-title" className="flex items-center gap-3 text-[24px] font-medium">
                        <div id="title">Certifications</div>
                        <a id="view-button" className="text-[14px] hover:opacity-100 opacity-80 bg-linear-[190deg,_#252525,_#101010] shadow-[inset_0_0_10px_#0000001a,_0_0_12px_#0006] hover:border-[#888] transition-colors duration-400 ease-[cubic-bezier(.165,.84,.44,1)] border-[#3d3d3d] border-[1px] rounded-[10px] p-1 px-2" href="https://github.com/RafilAlam/Certificates" target="_blank">View more</a>
                      </div>
                      <div id="row" className="grid gap-x-[16px] gap-y-[16px] justify-between sm:grid-cols-2">
                            <SmallCard title="Harvard" company="Computer Science Fundamentals" description="" glowcolor="#a51c30" src="certificates/cs50x.png" href="https://certificates.cs50.io/feaf15c3-7356-45dc-ad74-b7b612dcd021.pdf?size=letter" />
                            <SmallCard title="HackerRank" company="Problem Solving / DSA Thinking" description="" glowcolor="#189d78" src="certificates/hrpsbasic.png" href="https://www.hackerrank.com/certificates/4deebd3694a0"  />
                            <SmallCard title="SUTD" company="C++ Competitive Programming" description="" glowcolor="#195a9b" src="certificates/sutd.png" href="https://github.com/RafilAlam/Certificates/blob/main/Competititon%20Certificates/SUTD%20ROBOROARZ%20-%20Certificate%20of%20Participation.pdf" />
                            <SmallCard title="NOI" company="C++ Competitive Programming" description="" glowcolor="#b48921" src="certificates/noi.png" href="https://github.com/RafilAlam/Certificates/blob/main/Competititon%20Certificates/NUS%20NOI%20-%20Certificate%20of%20Participation.pdf" />
                      </div>
                    </div>

                    <div id="block" className="flex flex-col gap-[12px]">
                      <div id="block-title" className="flex items-center gap-3 text-[24px] font-medium">
                        <div id="title">Testimonials</div>
                        <a id="view-button" className="text-[14px] hover:opacity-100 opacity-80 bg-linear-[190deg,_#252525,_#101010] shadow-[inset_0_0_10px_#0000001a,_0_0_12px_#0006] group hover:border-[#888] transition-colors duration-400 ease-[cubic-bezier(.165,.84,.44,1)] border-[#3d3d3d] border-[1px] rounded-[10px] p-1 px-2" href="https://github.com/RafilAlam/Testimonials" target="_blank">View more</a>
                      </div>
                      <div id="row" className="grid gap-x-[16px] gap-y-[16px] justify-between sm:grid-cols-2">
                            <SmallCard title="Rimebound Studios" company="Lukas" description="- CEO" glowcolor="#55a3ad" src="testimonials/lukas.png" href="https://github.com/RafilAlam/Testimonials/blob/main/lukas_rimebound_09-05-2025.pdf" />
                            <SmallCard title="Singapore Polytechnic" company="Mr. Ong" description="- Center Director, ENGG" glowcolor="#770000" src="testimonials/sp.png" href="https://github.com/RafilAlam/Testimonials/blob/main/Testimonial%20-%20Centre%20Director%20of%20Singapore%20Polyechnic.pdf" />
                            <SmallCard title="CCA" company="Mr. Teo" description="- Teacher In-Charge" glowcolor="#4b4675" src="testimonials/mrteo.png" href="https://github.com/RafilAlam/Testimonials/blob/main/Testimonial%20-%20Teacher-In-Charge%20of%20CCA.pdf" />
                            <SmallCard title="Friend" company="Salman" description="- Mentee" glowcolor="#467552" src="testimonials/salman.png" href="https://github.com/RafilAlam/Testimonials/blob/main/salman_peer_10-04-2025.pdf"  />
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
