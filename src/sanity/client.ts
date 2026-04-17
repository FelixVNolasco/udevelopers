import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "t0yi5qe4",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]{ }');
  return posts;
}

export async function getNews() {
  const news = await client.fetch(
    '*[_type == "postList" && title == "News"]{..., List[]->{..., "image": image.asset->url} }'
  );
  return news;
}

export async function getArticle(slug: string) {
  const article = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{..., "image": image.asset->url }`,
    {
      slug,
    }
  );
  return article;
}
