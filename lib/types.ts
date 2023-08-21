export type Project = {
  title: string;
  tagline: string;
  cover: Cover;
  slug: string;
  hasDarkBackground: boolean;
};

type Cover = {
  url: string;
};

type File = {
  url: string;
};

export type Video = {
  title: string;
  cover: Cover;
  file: File;
  slug: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
};
