"use client";

import Image from "next/image";

import Icon from "@/components/ui/icon";

export default function Hero() {
    return (
        <div id="window" className="hidden sm:flex z-3 relative">
            <div id="window-glare-outer" className="absolute inset-0 z-1 h-[1px] bg-linear-[to_right,_#0000_5%,_#fffc_35%,_#fff_50%,_#fffc_65%,_#0000_95%]"></div>
            <div id="window-outline" className="p-[9px] lg:max-w-[1044px] max-w-[882px] w-full outline-[1px] outline-offset-[-1px] outline-[#f2f2f226] rounded-[24px] bg-radial-[circle_farthest-side_at_50%_0,_#f2f2f233,_#0000] shadow-[inset_0_0_8px_#0006,_0_0_60px_#0003,_0_30px_120px_#000c]">
                <div id="window-glare-inner" className="h-[2px] mb-[-2px] bg-linear-[to_right,_#0000_10%,_#fff_50%,_#0000_90%]"></div>
                <div id="window-main" className="relative rounded-[16px] w-full border-[1px] border-[#f2f2f24d] overflow-hidden shadow-[inset_0_0_10px_#0000001a,_0_0_12px_#0006]">
                    <div id="window-bar" className="flex z-5 items-center pl-[20px] pr-[12px] justify-between w-full h-[40px] backdrop-blur-[40px] bg-linear-[to_right,_#f2f2f21a,_#f2f2f280_50%,_#f2f2f21a] shadow-[0_10px_20px_4px_#0003]">
                        <div id="dots-wrapper" className="flex gap-[10px]">
                            <div id="dot1" className="w-[12px] h-[12px] border-[#10101040] border-[2px] rounded-[100px] bg-[#ff878b] shadow-[0_0_20px_2px_#ff878b]"></div>
                            <div id="dot2" className="w-[12px] h-[12px] border-[#10101040] border-[2px] rounded-[100px] bg-[#ffc787] shadow-[0_0_20px_2px_#ffc787]"></div>
                            <div id="dot3" className="w-[12px] h-[12px] border-[#10101040] border-[2px] rounded-[100px] bg-[#8bff87] shadow-[0_0_20px_2px_#8bff87]"></div>
                        </div>
                        <Image className="opacity-20" width="24" height="24" alt="" src="https://web.archive.org/web/20250114204118im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/64647bd0f92c6bb858b22871_icon-plus.svg"></Image>
                    </div>
                    <div id="window-content" className="flex flex-col gap-[64px] z-5 lg:pb-[200px] lg:pt-[96px] pt-[8vw] pl-[5vw] pr-[5vw] pb-[26vw] bg-[#101010b3]">
                        <div id="text-hero" className="lg:text-[85px] text-[8.2vw] font-medium leading-18 tracking-[-2px] text-shadow-[0_5px_10px_#0057ff26,_0_-5px_10px_#ff5a001a,_0_-5px_25px_#ffffff4d]">I craft tools & platforms that <span id="text-hero-serif" className="font-gloock italic bg-clip-text text-transparent bg-linear-[to_bottom,_#f2f2f2_50%,_transparent_100%] text-shadow-[0_5px_15px_#0057ff1a,_0_-5px_15px_#ff5a0014,_0_0_30px_#fff3]">empower.</span></div>
                        <div id="about-hero" className="grid grid-cols-2 gap-[2vw]">
                            <div id="skills" className="flex w-fit  gap-1 p-1 border-[2px] border-[#f2f2f226] rounded-[16px] bg-[#101010]">
                                <Icon src="/icons/python.png" name="Python" href="https://www.python.org/" />
                                <Icon src="/icons/c++.png" name="C++" href="https://cplusplus.com/" />
                                <Icon src="/icons/js.png" name="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                                <Icon src="/icons/lua.png" name="Lua" href="https://www.lua.org/home.html" />
                                <Icon src="/icons/nextjs.png" name="NextJS" href="https://nextjs.org/" />
                                <Icon src="/icons/react.png" name="React" href="https://react.dev/" />
                            </div>
                            <div id="about" className="lg:text-[24px] text-[2.2vw] font-medium">Freelance Developer. Open to Work.<br/> <span className="text-[#f2f2f280] font-normal">Based in Singapore.</span> </div>
                        </div>
                        <div id="window-grain" className="z-0 opacity-25 inset-0 absolute bg-blend-overlay bg-size-[200px] bg-[url('https://web.archive.org/web/20240904144252im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644af0299bc01254815ae442_noise-overlay-2.png')]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}