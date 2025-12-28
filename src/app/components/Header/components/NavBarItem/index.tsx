import Link from "next/link"
import Image from "next/image"

interface NavbarItemProps {
    href: string;
    id: string;
    label: string;
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export function NavBarItem({ href, id, label, activeSection, setActiveSection }: NavbarItemProps) {
    return (
        <li>
            <Link
                href={href}
                className={`block py-2 px-4 text-base 2xl:text-lg text-[#e4f5e4] rounded-lg font-medium hover:text-[#22c55e] hover:bg-[#1a2a1a] transition-all duration-200 lg:p-0 lg:hover:bg-transparent ${activeSection === id ? "text-[#22c55e] " : ""}`}
                onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    element?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(id);
                }}
            >
                {label}
            </Link>
        </li>
    )
}

export function HeroItem() {
    return (
        <Link
            href="#hero"
            className="flex items-center gap-2"
            onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("hero");
                element?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            <Image
                src="/logo.webp"
                alt="Boru Tamene Logo"
                width={32}
                height={32}
                className="object-contain"
            />
            <span className="self-center text-xl 2xl:text-2xl text-[#e4f5e4] font-semibold whitespace-nowrap hover:text-[#22c55e] transition-colors">
                Boru Tamene
            </span>
        </Link>
    )
}