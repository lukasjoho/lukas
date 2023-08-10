import Container from '@/components/Container';
import { getBlogpost, getBlogposts } from '@/lib/contentful';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import CloudImage from '@/components/CloudinaryImage';

import CodeHighlighter from '@/components/CodeHighlighter';
import { formatDate } from '@/lib/helper';

export async function generateStaticParams() {
  const res = await getBlogposts();
  const blogposts = res.data.blogPostCollection.items;
  return blogposts.map((blogpost: any) => ({
    slug: blogpost.slug,
  }));
}

export const revalidate = 0;

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const res = await getBlogpost(params.slug);
  const blogpost = res.data.blogPostCollection.items[0];
  return (
    <div>
      <Container variant="small">
        <article className="flex flex-col">
          <div className="mb-3 md:mb-6 space-y-2">
            <h1 className="font-meche font-medium text-4xl">
              {blogpost.title}
            </h1>
            <div className="font-medium">{formatDate(blogpost.date)}</div>
          </div>
          {documentToReactComponents(
            blogpost.content.json,
            renderOptions(blogpost.content.links)
          )}
        </article>
        <pre>{JSON.stringify(blogpost, null, 2)}</pre>
      </Container>
    </div>
  );
};

export default BlogPostPage;

function renderOptions(links: any) {
  const assetMap = new Map();
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  return {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <span className="font-medium">{text}</span>,
      [MARKS.CODE]: (text: any) => <CodeHighlighter>{text}</CodeHighlighter>,
      [MARKS.ITALIC]: (text: any) => <span className="italic">{text}</span>,
      [MARKS.SUBSCRIPT]: (text: any) => (
        <span className="text-xs text-muted">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-2 md:mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="mt-2 md:mt-4 mb-2 md:mb-4 text-3xl font-meche font-medium">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="mt-1.5 md:mt-3 mb-1.5 md:mb-3 text-xl font-meche font-medium">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <h4 className="mt-1 md:mt-2 mb-1 md:mb-2 text-base font-meche font-medium">
          {children}
        </h4>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <p className="border-l-4 border-dark pl-2 text-lg font-medium mb-2 md:mb-4">
          {children}
        </p>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          href={node.data.uri}
          className="text-blue-500 font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc ml-4 mb-2 md:mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal ml-4 mb-2 md:mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <div className="mb-2 md:mb-4">
            <CloudImage
              src={asset.url}
              steps={[400, 600, 700, 800, 900, 1000]}
            />
          </div>
        );
      },
    },
  };
}
