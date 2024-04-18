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
  description: string;
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
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  cover: ContentfulPhoto;
  caption: string;
}

export interface PhotoProjectDetailed extends PhotoProject {
  imagesCollection: {
    items: ContentfulPhoto[];
  };
}

export interface ContentfulPhoto {
  sys: {
    id: string;
  };
  url: string;
  width: number;
  height: number;
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
  height: number;
  width: number;
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

export interface YoutubeVideo {
  title: string;
  videoId: string;
  cover: Cover;
}
