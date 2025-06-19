"use client";

import Image from "next/image";
import Link from "next/link";

export default function Icon(props: any) {
    return (
        <a id="icon" className="flex flex-grow max-w-[60.95px] bg-[#181818] w-[42px] sm:w-[5vw] p-2 aspect-square rounded-[8px]" href={props.href} target="_blank">
            <img className="z-1 rounded-[4px]  aspect-square" src={props.src} alt={props.name} />
        </a>
    )
}