"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { TopBar } from "./TopBar";

const links = [["Ana Sayfa", "/"], ["Araçlar", "/araclar"], ["Aracımı Sat", "/aracimi-sat"], ["Araç Değerleme", "/arac-degerleme"], ["Nasıl Çalışır?", "/nasil-calisir"], ["Kurumsal", "/kurumsal"], ["İletişim", "/iletisim"]];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}><TopBar /><div className="navbar"><Logo /><nav className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label="Ana navigasyon">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><Link className="appointment" href="/iletisim">Randevu al <ArrowUpRight size={16} /></Link><button className="menu-toggle" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></header>;
}
