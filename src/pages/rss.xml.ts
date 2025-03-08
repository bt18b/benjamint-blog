import rss from "@astrojs/rss";
import { getPosts } from "../lib/getPosts";

export async function GET(context: any) {
	const posts = await getPosts();
	return rss({
		title: "Welcome | Benjamin Tannheimer",
		description:
			"Hey there.",
		site: context.site,
		items: posts.map((post) => ({
			// ...post.data,
			link: `blog/${post.slug}/`,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
		})),
	});
}