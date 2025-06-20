"use client";

type props = {
    text: string;
};

export default function Header(props: props) {
    return (
        <div id="wrapper" className="flex items-center gap-[12px] align-start">
            <div id="section-header-dot" className="rounded-[50%] w-[10px] h-[10px] bg-[#f2f2f2] shadow-[0_0_20px_#fff]"></div>
            <div id="section-header-text" className="text-[#f2f2f266] text-left tracking-[1.5px] mt-[1px] text-[11px] font-medium leading-[19px]">{props.text}</div>
        </div>
    )
}