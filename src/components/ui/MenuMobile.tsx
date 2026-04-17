"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router";
import LogoBrand from "@/assets/img/logo/epi-logo.svg";
import { Button } from "./button";
import { services } from "@/utils/data";
import { NavigationMenuItem, NavigationMenuList } from "./navigation-menu";
// import { services } from "@/utils/data";

export default function MenuMobile() {

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
      title: "Clientes",
      id: "clientes",
      href: "/epi#clientes",
    },
    {
      title: "Servicios",
      id: "servicios",
      href: "/epi#servicios",
    },
  ];


  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden" asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-md bg-[#00B4E9]"
          aria-label="Open menu"
        >
          <MdMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <nav className="pl-8" id="mobile-menu-2">
          <ul className="list-inside space-y-4 pl-8">
            <div>
              <NavLink to="/">
                <SheetClose>
                  <img
                    src={LogoBrand}
                    alt="logo"
                    style={{
                      width: "120px",
                    }}
                  />
                </SheetClose>
              </NavLink>
            </div>

            <NavigationMenuList className="flex w-full flex-col">
              {links.map((link) => (
                <NavigationMenuItem className="w-full" key={link.title}>
                  <NavLink
                    onClick={() => scrollToSection(link.id)}
                    to={link.href}
                  >
                    <SheetClose className="text-lg">{link.title}</SheetClose>
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            
            <ul className="list-inside pl-4 text-left">
              {services.map((service, index) => (
                <li key={index}>
                  <NavLink className={""} to={`/servicios/${service.slug}`}>
                    <SheetClose className="text-lg">{service.title}</SheetClose>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* <li>
              <NavLink to="/curriculum">
                <SheetClose className="text-lg">Curriculum</SheetClose>
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
