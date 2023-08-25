export interface CodeProject {
  title: string;
  tagline: string;
  cover: Cover;
  slug: string;
  hasDarkBackground: boolean;
}

export interface CodeProjectDetailed extends CodeProject {
  url?: string;
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
  tagline: string;
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
