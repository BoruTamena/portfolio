import type { Metadata } from "next";
import { LanguageProvider } from "./providers/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boru Tamene | Computer Engineer",
  description: "Portfolio of Boru Tamene, Compute Engineer specializing in cloud computing, distributed systems, and software engineering.",
  keywords: [
    "Boru Tamene", "Compute Engineer", "Cloud Computing", "Distributed Systems", "Software Engineering", "portfolio", "Next.js", "TypeScript", "React", "JavaScript", "Tailwind CSS", "Golang", "Python", "Django",
    "engineer", "developer", "portfolio", "compute engineer", "software engineer", "coding",
    "cloud engineer", "systems engineer", "backend engineer", "full-stack developer", "web programming", "software development",
    "hire engineer", "remote engineer", "tech professional",
    "code portfolio", "web solutions", "modern web apps", "React applications",
    "responsive websites", "web services", "API specialist", "UI developer"
  ],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "Boru Tamene | Compute Engineer",
    description: "Portfolio of Boru Tamene, Compute Engineer. Explore my projects and journey in technology.",
    type: "website",
    images: [{ url: "/logo.webp", width: 1200, height: 600, alt: "Boru Tamene | Compute Engineer" }],
    url: "/logo.webp"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0f0a]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

