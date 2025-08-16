
"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/lab", label: "Lab" },
    { href: "/contact", label: "Contact" },
  ];

  const NavItem = ({ href, label, isMobile }) => {
    const isActive = pathname === href;
    const linkClass = isActive 
      ? 'text-accent' 
      : 'hover:text-white transition-colors';

    return (
      <Link href={href} className={linkClass} onClick={() => isMobile && setOpen(false)}>
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-900/70 backdrop-blur">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-accent">milán</span>lora
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {navLinks.map(link => <NavItem key={link.href} {...link} isMobile={false} />)}
        </nav>

        <button onClick={()=>setOpen(!open)} className="md:hidden p-2" aria-label="Menu">☰</button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-zinc-900">
          <div className="container py-3 flex flex-col gap-3 text-zinc-300">
            {navLinks.map(link => <NavItem key={`${link.href}-mobile`} {...link} isMobile={true} />)}
          </div>
        </div>
      )}
    </header>
  );
}
