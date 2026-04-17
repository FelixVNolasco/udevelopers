"use client";

import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/hooks/use-search";
import { services } from "@/utils/data";
import {
  CarrouselOfExternalLinksInterface,
  ServiceInterface,
} from "@/utils/interfaces";
import { useNavigate } from "react-router";

export const SearchCommand = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [searchResults, setSearchResults] = useState<
    Array<
      | ServiceInterface
      | {
          service: ServiceInterface;
          product: {
            title: string;
            description: string;
            buttonExternalLink?: string;
            carrouselOfExternalLinks?: CarrouselOfExternalLinksInterface[];
            slug: string;
            image: string;
            cta?: {
              title: string;
              externalLink: string;
            };
          };
        }
    >
  >([]);
  const navigate = useNavigate();

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (
    item:
      | ServiceInterface
      | {
          service: ServiceInterface;
          product: {
            title: string;
            description: string;
            buttonExternalLink?: string;
            carrouselOfExternalLinks?: CarrouselOfExternalLinksInterface[];
            slug: string;
            image: string;
            cta?: {
              title: string;
              externalLink: string;
            };
          };
        }
  ) => {
    if ("product" in item) {
      // Navigate to the product page
      // navigate(`/servicios/${item.service.slug}/${item.product.slug}`);
      navigate(`/servicios/${item.service.slug}`);
    } else {
      // Navigate to the service page
      navigate(`/servicios/${item.slug}`);
    }
    onClose();
  };

  // const onSelect = (project: ServiceInterface) => {
  //   navigate(`/servicios/${project.slug}`);
  //   onClose();

  // };

  const handleSearch = (searchTerm: string) => {
    const results: Array<
      | ServiceInterface
      | {
          service: ServiceInterface;
          product: {
            title: string;
            description: string;
            buttonExternalLink?: string;
            carrouselOfExternalLinks?: CarrouselOfExternalLinksInterface[];
            slug: string;
            image: string;
            cta?: {
              title: string;
              externalLink: string;
            };
          };
        }
    > = [];

    // Search through services
    services.forEach((service) => {
      if (service.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(service);
      }

      // Search through products within the service
      if (service.products) {
        service.products.forEach((product) => {
          if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({ service, product });
          }
        });
      }
    });

    setSearchResults(results);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput
        placeholder="Buscar servicios o productos..."
        onValueChange={handleSearch}
      />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup heading="Servicios y Productos | EPI Group">
          {searchResults.map((item, index) => (
            <CommandItem
              key={index}
              value={
                "product" in item
                  ? `${item.service.slug}-${item.product.slug}-${item.product.title}`
                  : `${item.slug}-${item.title}`
              }
              onSelect={() => onSelect(item)}
            >
              <div className="flex gap-4">
                <img
                  src={"product" in item ? item.product.image : item.image}
                  alt={"product" in item ? item.product.title : item.title}
                  className="h-8 w-8 rounded-lg object-cover object-center"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <div>
                  <h3>{"product" in item ? item.product.title : item.title}</h3>
                  {"product" in item && (
                    <p className="text-sm text-gray-500">
                      {item.service.title}
                    </p>
                  )}
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
