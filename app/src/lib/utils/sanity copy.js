//import { setContext, afterUpdate, onMount, tick } from 'svelte';
import getContext from "svelte";
const { data } = { getContext };
console.log({ data });

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

export async function getPost(slug) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == data.slug],
    ` /*{
     body {}{
       markDefs[]{...}
    }
    }*/
  );
}
export async function gettPost(slug) {
  return await client.fetch(groq`*[_type == "post" && slug.current == data.slug]{
    ...,
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug
        }
      }
    }
  }`);
}
