export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../posts/markdown/${slug}.mdx`);
  return (
  <article id="blog-content" className="border-10 border-(--main-border-color) rounded-lg p-5 mb-5">
  <Post />
  </article>
  );
}

export function generateStaticParams() {
  return [{ slug: 'welcome_to_meog' }, { slug: 'how_a_webpage_is_made' }, { slug: 'where_meog_lives' }, 
  { slug: 'habemus_logo' }, { slug: 'the_beauty_of_sharing_a_website' }, { slug: 'heres_how_we_can_style_a_website' }, 
  { slug: 'how_meog_got_indexed_on_search_engines' }, { slug: 'meog_is_now_made_in_react' }, { slug: 'meog_articles_are_now_madeinmarkdown' }];
}

export const dynamicParams = false;