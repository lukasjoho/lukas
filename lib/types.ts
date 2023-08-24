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
}

export interface VideoProjectDetailed extends VideoProject {
  file?: File;
  youtubeId?: string;
  aspectRatio: string;
}

export interface PhotoProject {
  slug: string;
  title: string;
  cover: Cover;
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

export interface Cover {
  url: string;
}

type File = {
  url: string;
};

export interface RichTextContent {
  json: any;
  links: any;
}

export interface AboutText {
  content: RichTextContent;
}

export interface Params {
  slug: string;
}
