import LOGO from "@/assets/img/logo/epi-logo.svg";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: FaWhatsapp,
      link: "https://api.whatsapp.com/send?phone=+52525581255812",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/epi.group.mexico/",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/EPI.Group.México",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/epigroupmexico",
    },
  ];

  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-12 bg-[#474B51] px-12 py-12 lg:mt-24 lg:flex-row lg:gap-0">
      <img src={LOGO} alt="logo" className="w-32" />
      <p className="max-w-sm text-sm text-white">
        Copyright © 2023 EPI GROUP | Guillermo Gonzalez Camarena 1600 Int 3D
        Santa Fe CDMX | 55 5812 5581
      </p>
      <div>
        <ul className="flex gap-4">
          {socials.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <social.icon className="h-8 w-8 text-white" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
