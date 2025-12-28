import Link from 'next/link';
import { IconType } from 'react-icons';

interface SocialMediaButtonProps {
    href: string;
    Icon: IconType;
}

export function SocialMediaButton({ href, Icon }: SocialMediaButtonProps) {
    return (
        <Link
            href={href}
            target="_blank"
            className="border-[#2d3a2d] border-2 rounded-md p-3 inline-flex items-center justify-center text-[#e4f5e4] font-medium bg-[#0f1a0f]
      hover:bg-[#1a2a1a] hover:border-[#22c55e] transition-all duration-300 hover:scale-110"
        >
            <Icon size={20} />
        </Link>
    )
}