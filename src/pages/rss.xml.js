import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const allPosts = await getCollection('blog');
	const posts = allPosts.filter((post) => post.data.IsPublished === true);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/joseph-blog/blog/${post.id}/`,
		})),
	});
}
