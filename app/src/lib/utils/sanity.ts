import { createClient } from "@sanity/client";

import groq from "groq";

import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from "$env/static/public";

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
});

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPage (slug: string) {
  return await client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      ...,
      pageBuilder[]{
        // "heading" is an "object" from which we can "pick" fields
        _type == "heading" => {
          _type,
          heading,
          tagline,
          excerpt,
          image,
        },
        // if "cta" was a "document reference"
        // We could resolve "itself" with the @ operator: "cta" => @-> {
        // But it's "reference" is the reference.
        _type == "cta" => {
          _type,
          text,
          "href": @.reference->slug.current
        },
        _type == "xcta" => {
          _type,
          text,
          href
        },
    
        _type == "body" => {
          _type,
          title,
          textBlock[] {
            ...,
            markDefs[]{
              ...,
              _type == "internalLink" => {
                "slug": @.reference->slug
              }
            }
          }
        }
      },
    }`,
    {
      slug,
    }
  );
}
