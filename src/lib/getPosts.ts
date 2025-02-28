import { getCollection } from "astro:content";

export const getPosts = async () =>
	(await getCollection("posts"))
		.filter((post) => post.data.pubStatus || import.meta.env.DEV)
		.sort(
			(a, b) =>
				b.data.pubDate.getTime() - a.data.pubDate.getTime(),
		);