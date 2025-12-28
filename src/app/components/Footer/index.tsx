import packageJson from '../../../../package.json';
interface FooterProps {
    rights: string;
    developer: string;
}

export function Footer({ rights, developer }: FooterProps) {
    return (
        <footer className="bg-[#0a0f0a] text-[#e4f5e4] py-6 border-t border-[#2d3a2d]">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <p className="text-[#9db89d] mb-4 mt-1">{rights}</p>
                <p className="text-[#9db89d]">{developer}</p>
                <p className="text-[#9db89d]">v.{packageJson.version}</p>
            </div>
        </footer>
    );
}
