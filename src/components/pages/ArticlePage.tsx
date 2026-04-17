import { getArticle } from "@/sanity/client";

import { NavLink, useParams } from "react-router";

import {
  PortableText,
  PortableTextComponents,
  PortableTextListComponent,
  PortableTextListItemComponent,
  PortableTextMarkComponent,
} from "@portabletext/react";
import { PortableTextBlock, TypedObject } from "@portabletext/types";
import { useEffect, useState } from "react";
// Define types for the component props
interface RichTextContentProps {
  value: PortableTextBlock[] | TypedObject | TypedObject[];
}

type PortableTextProps = {
  children?: React.ReactNode;
  value?: PortableTextBlock;
};

// Define the styled components with proper typing
const components: PortableTextComponents = {
  block: {
    h1: ({ children }: PortableTextProps) => (
      <h1 className="mb-2 text-2xl font-bold lg:max-w-4xl lg:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }: PortableTextProps) => (
      <h2 className="mb-2 text-xl font-bold lg:max-w-2xl lg:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextProps) => (
      <h3 className="mb-2 text-lg font-bold lg:max-w-xl lg:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }: PortableTextProps) => (
      <p className="mb-4 text-base leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }: PortableTextProps) => (
      <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ((props) => {
      const { value, children } = props;
      const href = value?.href;
      const rel = !href?.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={href}
          rel={rel}
          target={rel ? "_blank" : undefined}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    }) as PortableTextMarkComponent,
    strong: ((props) => (
      <strong className="font-bold">{props.children}</strong>
    )) as PortableTextMarkComponent,
    em: ((props) => (
      <em className="italic">{props.children}</em>
    )) as PortableTextMarkComponent,
  },
  list: {
    bullet: ((props) => (
      <ul className="mb-4 list-disc space-y-2 pl-6">{props.children}</ul>
    )) as PortableTextListComponent,
    number: ((props) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6">{props.children}</ol>
    )) as PortableTextListComponent,
  },
  listItem: ((props) => (
    <li className="text-gray-700">{props.children}</li>
  )) as PortableTextListItemComponent,
};

// Main component with type safety
const RichTextContent: React.FC<RichTextContentProps> = ({ value }) => {
  return (
    <div className="text-left">
      <PortableText value={value} components={components} />
    </div>
  );
};

export default function ArticlePage() {
  const params = useParams();

  const slug = params.slug;

  const [post, setPost] = useState<{
    _id: string;
    slug: string;
    title: string;
    body: PortableTextBlock[] | TypedObject | TypedObject[];
    previewBody: string;
    image: string;
  }>();

  useEffect(() => {
    if (!slug) return;
    getArticle(slug).then((res) => {
      setPost(res);
    });
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  console.log(post)

  return (
    <div className="container mx-auto flex flex-col gap-12 px-4 py-8">
      <NavLink
        to="/blog"
        className="mb-4 inline-block text-blue-600 hover:text-blue-800"
      >
        &larr; Regresar al Blog
      </NavLink>

      <div className="relative aspect-square h-48 w-full overflow-hidden rounded-md shadow-sm lg:h-64">
        <img
          src={post.image}
          alt={post.title}
          className="absolute left-0 mb-4 h-64 w-full rounded-lg object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 flex h-full w-full items-end bg-gradient-to-t from-[#0000007a] from-10% to-transparent">
          <h1 className="p-4 text-2xl text-white lg:p-8">{post.title}</h1>
        </div>
      </div>

      <article className="prose lg:prose-xl">
        <RichTextContent value={post.body} />
      </article>
    </div>
  );
}
