"use client";

import Image from "next/image";
import Link from "next/link";

export default function ImgCard(props: any) {
    return (
        <div id="card" className="z-3 relative lg:max-w-[1044px] max-w-[846px] lg:max-h-[696px] max-h-[588px] w-full">
            <div id="card-glare-outer" className="absolute inset-0 z-1 h-[1px] bg-linear-[to_right,_#0000_5%,_#fffc_35%,_#fff_50%,_#fffc_65%,_#0000_95%]"></div>
            <div id="card-outline" className="p-[9px] w-full lg:h-[696px] h-[588px] outline-[1px] outline-offset-[-1px] outline-[#f2f2f226] rounded-[24px] bg-[#f2f2f20a] shadow-[0_40px_80px_#00000080]">
                <div id="card-glare-inner" className="h-[2px] mb-[-1px] bg-linear-[to_right,_#0000_10%,_#fff_50%,_#0000_90%]"></div>
                <div id="card-main" className="relative rounded-[16px] w-full h-full border-[1px] border-[#3d3d3d] overflow-hidden bg-linear-[190deg,_#252525,_#101010] shadow-[inset_0_0_10px_#0000001a,_0_0_12px_#0006] group hover:border-[#888] transition-colors duration-400 ease-[cubic-bezier(.165,.84,.44,1)]">
                    <img src={props.src} className="w-full h-full" alt="Image Failed to Load"></img>
                </div>
            </div>
        </div>
    )
}