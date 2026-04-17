import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../data/siteContent";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex-shrink-0">
          <span className="text-[#335264] text-2xl tracking-[0.15em] font-light uppercase">
            UNITE
            <span className="font-normal">D</span>
            <span className="text-[#c17f59] font-normal">D</span>
            EVELOPERS
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {navigationLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.path}
                className={`block px-4 py-2 text-xs tracking-wider text-[#6b8a9e] hover:text-[#335264] transition-colors whitespace-pre-line text-center leading-tight ${
                  openDropdown === idx
                    ? "text-[#335264] border-b-2 border-[#335264]"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </Link>

              {link.children && openDropdown === idx && (
                <ul className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 min-w-[220px] py-2 z-50">
                  {link.children.map((child) => (
                    <li key={child.path}>
                      <Link
                        to={child.path}
                        className="block px-5 py-2 text-sm text-[#6b8a9e] hover:text-[#335264] hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
