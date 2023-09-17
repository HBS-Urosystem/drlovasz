//import { getPosts } from '$lib/utils/sanity';
import { getPost } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";

/*
export const load = (async () => {
	const posts = await getPosts();

	if (posts) {
		return {
			posts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
*/

export const load = async () => {
  const post = await getPost("index");
  if (post) return post;

  throw error(404, "Not that found");
};
