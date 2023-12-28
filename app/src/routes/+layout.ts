export const prerender = true

import { getNavs } from "$lib/utils/sanity";
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
  const navs = await getNavs();
  if (navs) return {navs};

  throw error(404, "No Navs found");
};
