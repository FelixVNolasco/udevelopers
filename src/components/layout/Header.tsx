import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Plus, Minus } from "lucide-react";
import { navigationLinks } from "../../data/siteContent";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const toggleMobileExpanded = (idx: number) => {
    setMobileExpanded(mobileExpanded === idx ? null : idx);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="text-[#335264] text-xl md:text-2xl tracking-[0.15em] font-light uppercase">
            UNITE
            <span className="font-normal">D</span>
            <span className="text-[#c17f59] font-normal">D</span>
            EVELOPERS
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
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
                        onClick={() => setOpenDropdown(null)}
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#335264]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-40 bg-white/95 backdrop-blur-sm overflow-y-auto">
          <ul className="px-6 py-4 divide-y divide-gray-200">
            {navigationLinks.map((link, idx) => (
              <li key={idx}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.path}
                    className="block py-5 text-[#335264] font-bold text-sm tracking-wider uppercase"
                    onClick={() => {
                      if (!link.children) setMobileOpen(false);
                    }}
                  >
                    {link.label.replace("\n", " ")}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() => toggleMobileExpanded(idx)}
                      className="p-2 text-[#6b8a9e]"
                      aria-label="Expand submenu"
                    >
                      {mobileExpanded === idx ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                  )}
                </div>

                {link.children && mobileExpanded === idx && (
                  <ul className="pl-6 pb-4 space-y-3">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className="block text-sm text-[#6b8a9e]"
                          onClick={() => setMobileOpen(false)}
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
        </div>
      )}
    </header>
  );
}
