import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { navigationLinks, siteInfo } from "../../data/siteContent";
import epiLogo from "../../../public/images/branding/udevelopers-logo.png";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      const hashIndex = path.indexOf("#");
      if (hashIndex === -1) return; // no hash, let Link handle it

      const basePath = path.slice(0, hashIndex) || "/";
      const hash = path.slice(hashIndex);

      // If we're already on the target page, scroll directly
      if (location.pathname === basePath) {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Otherwise, Link navigates and ScrollToHash handles it
    },
    [location.pathname]
  );

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={epiLogo} alt="UDI Logo" className="h-4 w-auto" />
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
                        onClick={(e) => {
                          handleHashClick(e, child.path);
                          setOpenDropdown(null);
                        }}
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

        {/* Mobile Sheet trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 text-[#335264]"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[300px] sm:w-[350px] p-0 flex flex-col"
          >
            {/* Sidebar Header */}
            <SheetHeader className="px-6 py-5 border-b border-gray-100">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <Link to="/" onClick={closeMobile} className="inline-block">
                <img src={epiLogo} alt="UDI Logo" className="h-4 w-auto" />
              </Link>
            </SheetHeader>

            {/* Sidebar Content — scrollable */}
            <div className="flex-1 overflow-y-auto py-2">
              <nav aria-label="Mobile navigation">
                {navigationLinks.map((link, idx) => (
                  <div key={idx} className="border-b border-gray-100 last:border-b-0">
                    {link.children ? (
                      <Collapsible>
                        <div className="flex items-center">
                          <SheetClose asChild>
                            <Link
                              to={link.path}
                              onClick={closeMobile}
                              className="flex-1 px-6 py-4 text-[#335264] font-semibold text-sm tracking-wider uppercase"
                            >
                              {link.label.replace("\n", " ")}
                            </Link>
                          </SheetClose>
                          <CollapsibleTrigger asChild>
                            <button
                              className="p-4 text-[#6b8a9e] hover:text-[#335264] transition-colors group"
                              aria-label={`Expand ${link.label.replace("\n", " ")}`}
                            >
                              <ChevronDown
                                size={16}
                                className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                              />
                            </button>
                          </CollapsibleTrigger>
                        </div>

                        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                          <ul className="px-6 pb-4 space-y-1">
                            {link.children.map((child) => (
                              <li key={child.path}>
                                <SheetClose asChild>
                                  <Link
                                    to={child.path}
                                    onClick={(e) => {
                                      handleHashClick(e, child.path);
                                      closeMobile();
                                    }}
                                    className="block px-3 py-2 text-sm text-[#6b8a9e] hover:text-[#335264] hover:bg-gray-50 rounded-md transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={link.path}
                          onClick={closeMobile}
                          className="block px-6 py-4 text-[#335264] font-semibold text-sm tracking-wider uppercase"
                        >
                          {link.label.replace("\n", " ")}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="border-t border-gray-100 px-6 py-4">
              <p className="text-xs text-[#6b8a9e] leading-relaxed">
                {siteInfo.address}
              </p>
              <p className="text-xs text-[#6b8a9e] mt-1">
                {siteInfo.phone}
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
