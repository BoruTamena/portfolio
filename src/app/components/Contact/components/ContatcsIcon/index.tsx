import { IconType } from "react-icons";
import Link from "next/link";

interface ContactIconProps {
    Icon: IconType;
    href: string;
    title: string;
}

export function ContactIcon({ Icon, href, title }: ContactIconProps) {
    return (

        <div className="text-center hover:font-bold hover:scale-110 transition-all duration-300  ">
            <Link
                href={href}
                target="_blank"
                className="border-[#2d3a2d] border-2 rounded-md p-3 inline-flex items-center justify-center text-[#e4f5e4] font-medium bg-[#0f1a0f]
            hover:bg-[#1a2a1a] hover:border-[#22c55e] transition-all duration-300 hover:scale-110"
            >
                <Icon size={36} />
            </Link>
            <p className="text-[#e4f5e4] mt-2 ">{title}</p>
        </div>
    )
}