import packageJson from '../../../../package.json';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
    rights: string;
    developer: string;
}

export function Footer({ rights, developer }: FooterProps) {
    return (
        <footer className="bg-[#0a0f0a] text-[#e4f5e4] py-6 border-t border-[#2d3a2d]">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <Link
                    href="#hero"
                    className="inline-flex items-center justify-center mb-4"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <Image
                        src="/logo.webp"
                        alt="Boru Tamene Logo"
                        width={40}
                        height={40}
                        className="object-contain hover:opacity-80 transition-opacity"
                    />
                </Link>
                <p className="text-[#9db89d] mb-4 mt-1">{rights}</p>
                <p className="text-[#9db89d]">{developer}</p>
                <p className="text-[#9db89d]">v.{packageJson.version}</p>
            </div>
        </footer>
    );
}
