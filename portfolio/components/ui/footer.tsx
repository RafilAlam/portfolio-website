"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer(props: any) {
    return (
        <footer id="container-footer" className="flex flex-col lg:w-[1044px] w-full gap-[64px]">
            <div id="footer-top" className="flex justify-between items-start">
                <Image src="/logo.svg" className="inline" width="42" height="42" alt="Logo"></Image>
                <div id="footer-links-wrapper" className="flex gap-[32px]">
                    <div id="footer-links-column" className="flex flex-col gap-[16px] lg:w-[106px] w-[80px]"> 
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
                    <div id="footer-links-column" className="flex flex-col gap-[16px] lg:w-[106px] w-[80px]"> 
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
        </footer>
    )
}