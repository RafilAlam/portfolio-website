"use client";

import Image from "next/image";

type props = {
    href: string;
    description: string;
    title: string;
    company: string;
    src: string;
    glowcolor: string;
    enabled: boolean;
};

export default function ProjectVid(props: props) {

    return (
        <a id="card" href={props.href} target="_blank" className={`${props.enabled ? "cursor-pointer" : "cursor-default"} z-3 relative lg:max-w-[1044px] max-w-[846px] lg:max-h-[696px] sm:max-h-[588px] w-full`}>
            <div id="card-glare-outer" className="absolute inset-0 z-1 h-[1px] bg-linear-[to_right,_#0000_5%,_#fffc_35%,_#fff_50%,_#fffc_65%,_#0000_95%]"></div>
            <div id="card-outline" className="p-[9px] w-full lg:h-[696px] aspect-square sm:h-[588px] outline-[1px] outline-offset-[-1px] outline-[#f2f2f226] rounded-[24px] bg-[#f2f2f20a] shadow-[0_40px_80px_#00000080]">
                <div id="card-glare-inner" className="h-[2px] mb-[-1px] bg-linear-[to_right,_#0000_10%,_#fff_50%,_#0000_90%]"></div>
                <div id="card-main" className="relative rounded-[16px] w-full h-full border-[1px] border-[#3d3d3d] overflow-hidden bg-linear-[190deg,_#252525,_#101010] shadow-[inset_0_0_10px_#0000001a,_0_0_12px_#0006] group hover:border-[#888] transition-colors duration-400 ease-[cubic-bezier(.165,.84,.44,1)]">
                    <div id="card-content" className="flex relative flex-col gap-[64px] z-5 pt-[32px] pl-[28px] pr-[28px]">
                        <div id="card-top" className="z-1 flex flex-col relative gap-[8px]">
                            <div id="title-row" className="flex justify-between text-shadow-[0_-2px_10px_#fff3] tracking-0">
                                <div id="title" className="flex text-[24px] font-medium">{props.title}</div>
                                <Image id="arrow" className={`group-hover:translate-x-2 ${props.enabled ? "opacity-100" : "opacity-0"} ease-out duration-500`} src="https://web.archive.org/web/20240904115935im_/https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg" width="32" height="32" alt=""></Image>
                            </div>
                            <div id="description-row" className="text-[#f2f2f280] tracking-[0.2px] lg:text-[16px] text-[14px] leading-[20px]">
                                <span id="company" className="text-[#f2f2f2cc] font-medium">{props.company} </span>
                                — {props.description}
                            </div>
                        </div>
                        <div id="card-thumbnail" className="flex justify-center">
                            <video className="z-1 relative rounded-[7px] shadow-[0_40px_50px_10px_#00000040] max-w-9/10 w-full h-full group-hover:-translate-y-5 duration-300 ease-out transition-transform" autoPlay muted loop>
                                <source src={props.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div id="card-color" style={{ backgroundImage: `radial-gradient(circle at 50% 0, #7fcfff33, #0000 80%), radial-gradient(circle at 50% 0, ${props.glowcolor}, #0000)` }} className="absolute group-hover:opacity-100 sm:opacity-0 inset-0 w-full h-full group-hover:ease-inout transition-opacity ease-out group-hover:duration-400 duration-700"></div>
                </div>
            </div>
        </a>
    )
}