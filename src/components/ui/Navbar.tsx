import LOGO from "@/assets/img/logo/epi-logo.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { Button } from "./button";
import MenuMobile from "./MenuMobile";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SearchCommand } from "../search-command";
import SearchInput from "../SearchInput";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  const links: { title: string; id: string; href: string }[] = [
    {
      title: "Inicio",
      id: "inicio",
      href: "/#inicio",
    },
    {
      title: "Nosotros",
      id: "nosotros",
      href: "/#nosotros",
    },
    {
      title: "Información",
      id: "informacion",
      href: "/#informacion",
    },
    {
      title: "Servicios",
      id: "servicios",
      href: "/#servicios",
    },

    {
      title: "Clientes",
      id: "clientes",
      href: "/#clientes",
    },
  ];

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white py-4 sm:px-6 lg:px-8">
      <NavLink onClick={() => scrollToSection("inicio")} to="/">
        <img src={LOGO} alt="logo" className="w-24 lg:w-32" />
      </NavLink>
      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex">
          {links.map((link) => (
            <NavigationMenuItem key={link.title}>
              <NavLink onClick={() => scrollToSection(link.id)} to={link.href}>
                <Button
                  className="text-lg font-normal"
                  size={"lg"}
                  variant={"ghost"}
                >
                  {link.title}
                </Button>
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <div>
          <SearchCommand />
          <SearchInput />
        </div>
        <MenuMobile />
      </NavigationMenu>
    </header>
  );
}
