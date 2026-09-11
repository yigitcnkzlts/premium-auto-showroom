"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [["Ana Sayfa", "/"], ["Araçlar", "/araclar"], ["Aracımı Sat", "/aracimi-sat"], ["Araç Değerleme", "/arac-degerleme"], ["Nasıl Çalışır?", "/nasil-calisir"], ["Kurumsal", "/kurumsal"], ["İletişim", "/iletisim"]];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="D Cars ana sayfa">
        <Image src="/images/dcars-logo.png" alt="D Cars" width={156} height={156} priority />
      </Link>
      <nav className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label="Ana navigasyon">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <Link className="appointment" href="/iletisim">Randevu al <ArrowUpRight size={16} /></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
