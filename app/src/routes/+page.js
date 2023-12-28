import { getPage } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";

/*
export const load = (async () => {
	const pages = await getPages();

	if (pages) {
		return {
			pages
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
*/

export const load = async () => {
  const page = await getPage("index");
  if (page) return page;

  throw error(404, "Not that found");
};
