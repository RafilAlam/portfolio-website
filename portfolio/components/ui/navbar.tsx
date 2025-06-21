"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { useRef } from "react";
import gsap from "gsap";

type props = {
    tab: string;
};

export default function Navbar(props: props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open, setOpen] = useState(false);
    const mobilenavbutton = useRef(null);
    const mobilenavxbutton = useRef(null);
    const mobilenavmenu = useRef(null);

    const [animating, setAnimating] = useState(false);

    const toggleMenu = () => {
        if (animating) return;
        setAnimating(true);

        setOpen(prev => {
            const newState = !prev;
            if (newState) {
                gsap.to(mobilenavbutton.current, {
                    rotation: 360,
                    duration: 0.5,
                    transformOrigin: "50% 50%",
                });
                gsap.to(mobilenavbutton.current, {
                    opacity: 0,
                    duration: 0.2,
                });
                gsap.to(mobilenavxbutton.current, {
                    rotation: 180,
                    duration: 0.2,
                    transformOrigin: "50% 50%",
                });
                gsap.to(mobilenavxbutton.current, {
                    duration: 0.2,
                    opacity: 1
                });
                gsap.to(mobilenavmenu.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    transformOrigin: "top right",
                    onComplete: () => setAnimating(false)
                });
            } else {
                gsap.to(mobilenavbutton.current, {
                    rotation: 0,
                    opacity: 1,
                    duration: 0.3,
                    transformOrigin: "50% 50%",
                });
                gsap.to(mobilenavxbutton.current, {
                    rotation: 0,
                    opacity: 0,
                    duration: 0.3,
                    transformOrigin: "50% 50%",
                });
                gsap.to(mobilenavmenu.current, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.3,
                    transformOrigin: "top right",
                    onComplete: () => setAnimating(false)
                });
            }

            return newState;
        });
    };


    const pill = useRef(null);
    const indglow = useRef(null);
    const indpill = useRef(null);
    
    const linkedinref = useRef(null);
    const githubref = useRef(null);

    const router = useRouter();

    const tab1click = (href: string) => {
        gsap.to(indpill.current, {width: "80px", left: "6px", duration: 0.4, ease: "power2.out"});
        gsap.to(indglow.current, {marginLeft: "33px", duration: 0.4, ease: "power1.out", onComplete: () => router.push(href)});
    }

    const tab2click = (href: string) => {
        gsap.to(indpill.current, {width: "70px", left: "96px", duration: 0.4, ease: "power2.out"});
        gsap.to(indglow.current, {marginLeft: "120px", duration: 0.4, ease: "power1.out", onComplete: () => router.push(href)});
    }

    return (
        <nav className="flex items-center justify-between w-full">
            <div id="logo-block" className="flex hidden sm:flex">
                <Image src="/logo.svg" className="inline" width="42" height="42" alt="Logo"></Image>
                <div id="logo-text">
                    <div id="logo-name" className="inline text-2xl ml-3">Rafil Alam</div>
                    <div id="logo-title" className="text-[#f2f2f280] font-medium ml-3 text-[12px]">Software Engineer</div>
                </div>
            </div>
            <div id="nav-pill-wrapper" className="">
                <div id="nav-indicator-glow" ref={indglow} className={`w-[24px] h-[4px] rounded-[2px] bg-[#f2f2f2] shadow-[0_2px_25px_2px_#fff] ${props.tab === "1" ? "ml-[33px]" : "ml-[120px]"} mb-[-2px]`}></div>
                <div id="nav-pill" ref={pill} className="flex bg-[#f2f2f20d] backdrop-blur-md border border-[#f2f2f21a] rounded-4xl p-1 pl-[6] pr-[6] gap-2 shadow-[0_10px_25px_#00000026] hover:shadow-[0_15px_40px_#0000004d] hover:border-[#f2f2f233] hover:bg-[#f2f2f214] [transition:border-color_.6s_cubic-bezier(.165,.84,.44,1),_box-shadow_1s_cubic-bezier(.23,1,.32,1)]">
                    <div onClick={() => tab1click("/")} className="bg-transparent font-medium border-inherit rounded-4xl text-[15px] text-center p-2 pl-6 pr-6 hover:bg-[linear-gradient(to_right,_#0000,_#f2f2f20d)]">Work</div>
                    <div onClick={() => tab2click("/info")} className="bg-transparent font-medium border-inherit rounded-4xl text-[15px] text-center p-2 pl-6 pr-6 hover:bg-[linear-gradient(to_right,_#0000,_#f2f2f20d)]">Info</div>
                    <div id="nav-indicator-pill" ref={indpill} className={`absolute block bg-[#f2f2f20d] rounded-[18px] ${props.tab === "1" ? "w-[80px]" : "w-[70px]"} h-[36px] top-[5px] ${props.tab === "1" ? "left-[6px]" : "left-[96px]"}`}></div>
                </div>
            </div>
            <div id="nav-right-wrapper" className="">
                    <div id="mobile-socials-wrapper" className="flex sm:hidden justify-center items-center bg-[#f2f2f214] border-[#f2f2f233] border-[1px] shadow-[0_8px_20px_#0000004d] rounded-[100px] w-[48px] h-[48px] backdrop-blur-[8px]" onClick={toggleMenu}>
                        <Image className="opacity-100" ref={mobilenavbutton} src="https://web.archive.org/web/20250114204118im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644c8981f87a7036b4c7fa64_icon-%40.svg" width="28" height="28" alt="" />
                        <Image className="opacity-0 absolute" ref={mobilenavxbutton} src="https://web.archive.org/web/20250114204118im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/645a01ff46a1cf3d85d90049_icon-close.svg" width="28" height="28" alt="" />
                    </div>
                    <div id="mobile-menu" ref={mobilenavmenu} className="flex flex-col absolute scale-0 opacity-0 z-10 backdrop-blur-[20px] bg-[#f2f2f20d] border-[1px] border-[#f2f2f21a] rounded-[16px] w-[160px] p-[8px] top-[88px] right-[24px] overflow-hidden shadow-[0_10px_30px_#0000004d]">
                        <a href="https://www.linkedin.com/in/rafil-alam-973759364/" target="_blank" ref={linkedinref} className="flex text-[14px] justify-between tracking-wider font-medium py-[12px] px-[14px] gap-[4px] rounded-[24px] hover:bg-[#f2f2f20d] transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)]">
                            <div id="social-name">LinkedIn</div>
                            <img id="social-icon" width="18" height="18" src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" />
                        </a>
                        <a href="https://github.com/RafilAlam" target="_blank" ref={githubref} className="flex text-[14px] justify-between tracking-wider font-medium py-[12px] px-[14px] gap-[4px] rounded-[24px] hover:bg-[#f2f2f20d] transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)]">
                            <div id="social-name">GitHub</div>
                            <img id="social-icon" width="18" height="18" src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" />
                        </a>
                    </div>
                    <div id="socials-wrapper" className="hidden sm:flex items-center gap-2">
                        <a href="https://www.linkedin.com/in/rafil-alam-973759364/" target="_blank" ref={linkedinref} className="flex text-[14px] tracking-wider font-medium p-3 pl-[16px] pr-[12px] gap-1 rounded-[24px] hover:bg-[#f2f2f20d] transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)]">
                            <div id="social-name">LinkedIn</div>
                            <img id="social-icon" width="18" height="18" src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" />
                        </a>
                        <a href="https://github.com/RafilAlam" target="_blank" ref={githubref} className="flex text-[14px] tracking-wider font-medium p-3 pl-[16px] pr-[12px] gap-1 rounded-[24px] hover:bg-[#f2f2f20d] transition-colors duration-300 ease-[cubic-bezier(.165,.84,.44,1)]">
                            <div id="social-name">GitHub</div>
                            <img id="social-icon" width="18" height="18" src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="" />
                        </a>
                    </div>
            </div>
        </nav>
    )
}