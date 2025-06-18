"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header"

export default function MobileHero() {
    return (
        <div id="mobile-window" className="flex flex-col sm:hidden z-3 relative gap-[24px]">
            <div id="wrapper" className="flex items-center gap-[12px] align-start">
                <div id="section-header-dot" className="rounded-[50%] w-[10px] h-[10px] bg-[#f2f2f2] shadow-[0_0_20px_#fff]"></div>
                <div id="section-header-text" className="text-[#f2f2f280] text-left tracking-[1.5px] mt-[1px] text-[16px] font-normal leading-[19px]">Rafil Alam - Software Engineer</div>
            </div>
            <div id="window-content" className="flex flex-col gap-[6vh] z-0 pl-[8px] pr-[8px] bg-[#101010b3]">
                <div id="text-hero" className="text-[11vw] font-medium leading-[12vw] tracking-[-0.25vw] text-shadow-[0_5px_10px_#0057ff26,_0_-5px_10px_#ff5a001a,_0_-5px_25px_#ffffff4d]">I craft tools <span><br></br>&</span> platforms that <span id="text-hero-serif" className="font-gloock italic bg-clip-text text-transparent bg-linear-[to_bottom,_#f2f2f2_50%,_transparent_100%] text-shadow-[0_5px_15px_#0057ff1a,_0_-5px_15px_#ff5a0014,_0_0_30px_#fff3]">empower.</span></div>
                <div id="about-hero" className="flex gap-[2vw]">
                    <div id="nullzone" className="" />
                    <div id="about" className="text-[4vw] font-medium">Freelance Developer. Open to Work.<br/> <span className="text-[#f2f2f280] font-normal">Based in Singapore.</span> </div>
                </div>
            </div>
            <div id="window-grain" className="z-0 opacity-25 inset-0 absolute bg-blend-overlay bg-size-[200px] bg-[url('https://web.archive.org/web/20240904144252im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')]"></div>
            <div id="section-divider" className="flex flex-col items-center">
                  <div id="container-general" className="flex flex-col w-full gap-[96px]">
                    <div id="divider-wrapper" className="flex gap-[8px] items-center">
                      <div id="divider-line" className="flex-1 h-[1px] bg-[#f2f2f233]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}