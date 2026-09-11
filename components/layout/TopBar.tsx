import { Camera, Clock3, Mail, MessageCircle, Phone, UsersRound } from "lucide-react";

const contactItems = [[Phone, "+90 212 000 00 00"], [Mail, "info@dcars.com"], [Clock3, "Pzt - Cmt / 09:00 - 19:00"]] as const;
const socialItems = [[Camera, "Instagram"], [MessageCircle, "WhatsApp"], [UsersRound, "Facebook"]] as const;

export function TopBar() {
  return <div className="topbar"><div className="topbar__contact">{contactItems.map(([Icon, label]) => <a href="#iletisim" key={label}><Icon size={13} /> <span>{label}</span></a>)}</div><div className="topbar__social" aria-label="Sosyal medya bağlantıları">{socialItems.map(([Icon, label]) => <a href="#sosyal-medya" aria-label={label} key={label}><Icon size={14} /></a>)}</div></div>;
}
