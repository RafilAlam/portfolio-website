"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
    const pill = useRef(null);
    const indglow = useRef(null);
    const indpill = useRef(null);

    const router = useRouter();

    const pillhoverenter = () => {
        gsap.to(pill.current, {boxShadow: "0 15px 40px #0000004d", borderColor: "#f2f2f233", backgroundColor: "#f2f2f214", duration: 0.5, ease: "power1.out"})
    }

    const pillhoverleave = () => {
        gsap.to(pill.current, {boxShadow: "0 10px 25px #00000026", borderColor: "#f2f2f21a", backgroundColor: "#f2f2f20d", duration: 0.4, ease: "power2.out"})
    }

    const tab2click = (href: string) => {
        gsap.to(indpill.current, {left: "auto", right: "6px", duration: 0.5, onComplete: () => router.push(href)})
    }

    return (
        <nav className="p-7 flex items-center justify-between sticky top-0">
            <div id="logo-block" className="flex">
                <Image src="/logo.svg" className="inline" width="42" height="42" alt="Logo"></Image>
                <div id="logo-text">
                    <div id="logo-name" className="inline text-2xl ml-3">Rafil Alam</div>
                    <div id="logo-title" className="text-[#f2f2f280] ml-3 text-[12px]">Software Engineer</div>
                </div>
            </div>
            <div id="nav-pill-wrapper" className="">
                <div id="nav-indicator-glow" ref={indglow} className="w-[24px] h-[4px] rounded-[2px] bg-[#f2f2f2] shadow-[0_2px_25px_2px_#fff] ml-[33px] mb-[-2px]"></div>
                <div id="nav-pill" ref={pill} className="flex bg-[#f2f2f20d] backdrop-blur-md border border-[#f2f2f21a] rounded-4xl p-1 pl-[6] pr-[6] gap-2" onMouseEnter={pillhoverenter} onMouseLeave={pillhoverleave}>
                    <div  className="bg-transparent border-inherit rounded-4xl text-[15px] text-center p-2 pl-6 pr-6 hover:bg-[linear-gradient(to_right,_#0000,_#f2f2f20d)]">Work</div>
                    <div onClick={() => tab2click("")} className="bg-transparent border-inherit rounded-4xl text-[15px] text-center p-2 pl-6 pr-6 hover:bg-[linear-gradient(to_right,_#0000,_#f2f2f20d)]">Projects</div>
                    <div id="nav-indicator-pill" ref={indpill} className="absolute block bg-[#f2f2f20d] rounded-[18px] w-[80px] h-[36px] top-[5px] left-[6px]"></div>
                </div>
            </div>
            <div id="socials-wrapper" className="">
                <Link href="">LinkedIn</Link>
                <Link href="">GitHub</Link>
            </div>
        </nav>
    )
}