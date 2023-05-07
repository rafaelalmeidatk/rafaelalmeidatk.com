import { ResolvingMetadata } from 'next';
import Image from 'next/image';
import { Heading } from '../../../components/Heading';
import { formatPostDate } from '../../../lib/postTime';
import { createMetadata } from '../../../lib/metadata';
import { getAllPosts } from '../../../lib/posts';

type PostProps = {
  params: { slug: string };
};

// For some reason this is showing an error but the build still passes
export const dynamicParams = false;

export const generateMetadata = async (
  { params }: PostProps,
  parent: ResolvingMetadata
) => {
  const { meta } = await import(`../../../posts/${params.slug}.mdx`);
  const parentMetadata = await parent;

  return createMetadata(
    {
      title: meta.title,
      description: meta.description,
      path: `/blog/${params.slug}`,
    },
    parentMetadata,
    { openGraph: { type: 'article' } }
  );
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Post = async ({ params }: PostProps) => {
  const { meta, default: Component } = await import(
    `../../../posts/${params.slug}.mdx`
  );

  return (
    <article>
      <header className="mt-14 mb-8 text-center">
        <Heading as="h1">{meta.title}</Heading>
        <time className="block mt-1.5 text-md opacity-80" dateTime={meta.date}>
          {formatPostDate(meta.date)}
        </time>
      </header>

      {meta.image && (
        <div className="relative mb-8 h-[300px] sm:h-[350px] md:h-[500px] ml-[-1rem] w-[calc(100%+2rem)] md:ml-[-1.1rem]  md:w-[calc(100%+2.2rem)] lg:ml-[-3.5rem]  lg:w-[calc(100%+7rem)]">
          <Image
            src={meta.image.src}
            title={`Photo by ${meta.image.attribution}`}
            className="w-full h-full object-cover"
            alt=""
            sizes="(min-width: 1024px) 1024px,
                       (min-width: 768px) 768px,
                       100vw"
            fill
            priority
          />
        </div>
      )}

      <section className="prose text-lg dark:prose-dark max-w-none">
        <Component />
      </section>
    </article>
  );
};

export default Post;
