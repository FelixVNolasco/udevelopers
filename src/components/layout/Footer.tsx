import { Link } from "react-router-dom";
import { footerLinks, siteInfo } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-[#335264] text-white">
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        {/* Top links row */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#c4a882]">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span>
            &copy; {siteInfo.name} {new Date().getFullYear()}
          </span>
        </div>

        {/* Divider */}
        <hr className="border-[#4a6b7d] my-6" />

        {/* Bottom section: logo + company info */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo area */}
          <div>
            <div className="text-6xl font-light text-[#8eaab8] leading-none mb-3 tracking-wider">
              DD
            </div>
            <p className="text-sm text-[#a0b8c4] mt-2">
              {siteInfo.description}
            </p>
          </div>

          {/* Company info */}
          <div className="text-right text-sm space-y-1">
            <p className="font-semibold tracking-wider text-xs uppercase">
              UNITED DEVELOPERS INTERNATIONAL LLC.
            </p>
            <p className="text-[#a0b8c4]">{siteInfo.address}</p>
            <p className="text-[#a0b8c4]">T. {siteInfo.phone}</p>
            <p className="text-[#a0b8c4]">{siteInfo.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
