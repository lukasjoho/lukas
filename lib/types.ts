export interface CodeProject {
  title: string;
  caption: string;
  cover: Cover;
  slug: string;
  hasDarkBackground: boolean;
}

export interface CodeProjectDetailed extends CodeProject {
  ctaLabel?: string;
  ctaUrl?: string;
  content?: any;
}

export interface VideoProject {
  title: string;
  slug: string;
  cover: Cover;
  caption: string;
}

export interface VideoProjectDetailed extends VideoProject {
  aspectRatio: string;
  file?: File;
  youtubeId?: string;
}

export interface PhotoProject {
  slug: string;
  title: string;
  cover: Cover;
  caption: string;
}

export interface PhotoProjectDetailed extends PhotoProject {
  imagesCollection: {
    items: {
      url: string;
    }[];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

export interface BlogPostDetailed extends BlogPost {
  caption: string;
  content: RichTextContent;
}

export interface AboutText {
  content: RichTextContent;
}

export interface Cover {
  url: string;
}

interface File {
  url: string;
}

export interface RichTextContent {
  json: any;
  links: any;
}

export interface Params {
  slug: string;
}

export interface MetaDataData {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
}

export interface MetaDataOptions {
  type?: string;
  path: string;
  gravity?: 'g_south' | 'g_face';
}

export interface ContentfulImage {
  url: string;
}
