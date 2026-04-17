import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "../ui/button";
import { getNews } from "@/sanity/client";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function NewsSection() {
  const [posts, setPosts] = useState<
    {
      _id: string;
      title: string;
      previewBody: string;
      image: string;
      slug: {
        current: string;
      };
    }[]
  >();

  useEffect(() => {
    getNews().then((res) => {
      setPosts(res[0].List);
    });
  }, []);


  return (
    <div className="min-w-full">
      <Carousel>
        <div className="w-full bg-[#F5F5F5] py-12 lg:py-24">
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-8">
              <h3 className="ml-8 text-2xl font-bold text-[#00B4E9] lg:text-4xl">
                Información de EPI
              </h3>
              <div className="flex items-center">
                <CarouselPrevious className="relative left-0 z-10" />
                <CarouselNext className="relative right-0 z-10" />
              </div>
            </div>
          </div>
          <CarouselContent>
            {posts &&
              posts.map((post) => (
                <CarouselItem key={post._id}>
                  <div className="grid gap-6 px-4 pt-12 lg:grid-cols-2 lg:gap-12 lg:px-12">
                    <img
                      src={post.image}
                      className="aspect-square h-full w-full rounded-3xl object-cover object-center"
                    />
                    <div className="flex flex-col items-start justify-center lg:gap-4">
                      <h2 className="max-w-lg pb-6 text-left text-2xl font-medium lg:pb-12 lg:text-4xl">
                        {post.title}
                      </h2>
                      <p className="max-w-lg pb-4 text-left text-base font-normal lg:text-lg">
                        {post.previewBody}
                      </p>

                      <NavLink to={`/blog/${post.slug.current}`}>
                        <Button
                          className="h-12 rounded-full bg-[#2A60C1] text-xl"
                          size={"lg"}
                          variant={"default"}
                        >
                          Ver Más
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
