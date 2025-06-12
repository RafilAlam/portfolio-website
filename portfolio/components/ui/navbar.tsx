import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-7 flex items-center justify-between sticky top-0">
            <div id="logo-block" className="flex">
                <Image src="/logo.svg" className="inline" width="42" height="42" alt="Logo"></Image>
                <div id="logo-text">
                    <div id="logo-name" className="inline text-2xl ml-3">Rafil Alam</div>
                    <div id="logo-title" className="text-[#f2f2f280] ml-3 text-[12px]">Software Engineer</div>
                </div>
            </div>
            <div id="nav-pill" className="flex bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl p-1 pl-[6] pr-[6] gap-2 hover:bg-[#f2f2f214] hover:border-[#f2f2f233] hover:shadow-[0_15px_40px_#0000004d]">
                <Link href="" className="bg-inherit border-inherit rounded-4xl text-[15px] text-center p-2 pl-6 pr-6 hover:bg-[linear-gradient(to_right,_#0000,_#f2f2f20d)]">Work</Link>
                <Link href="" className="bg-transparent border-inherit rounded-4xl text-[15px] text-center p-2 pl-6 pr-6 hover:bg-[linear-gradient(to_right,_#0000,_#f2f2f20d)]">Projects</Link>
            </div>
            <div id="socials-wrapper" className="">
                <Link href="">LinkedIn</Link>
                <Link href="">GitHub</Link>
            </div>
        </nav>
    )
}