import { error } from "@sveltejs/kit";

import { getPage } from "$lib/utils/sanity";

export const load = async ({ params }) => {
  const page = await getPage(params.slug || "index");
  if (page) return page;

  throw error(404, "Not found");
};
