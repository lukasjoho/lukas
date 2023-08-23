import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { FC } from 'react';
import OptimizedImage from '../../shared/OptimizedImage';
import CodeHighlighter from './CodeHighlighter';

interface RichTextRendererProps extends React.HTMLProps<HTMLDivElement> {
  json: any;
  links?: string;
}

const RichTextRenderer: FC<RichTextRendererProps> = ({
  json,
  links,
  ...props
}) => {
  return (
    <div className={props.className}>
      {documentToReactComponents(json, renderOptions(links))}
    </div>
  );
};

export default RichTextRenderer;

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
        <span className="text-xs text-muted -mb-2">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-2 md:mb-4 [&>pre]:mt-0">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="mt-8 md:mt-8 mb-2 md:mb-4 text-3xl font-meche font-medium">
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
        <p className="border-l-4 border-dark pl-2 text-lg font-medium mb-2 md:mb-4 [&>p]:mb-0">
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
        <ul
          className="list-disc ml-4 mb-2 md:mb-4 
        list-inside p-0"
        >
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol
          className="list-decimal mb-2 md:mb-4 ml-6 md:ml-5
        "
        >
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <div className="mb-2 md:mb-4">
            <OptimizedImage
              src={asset.url}
              steps={[400, 600, 700, 800, 900, 1000]}
            />
          </div>
        );
      },
    },
  };
}
