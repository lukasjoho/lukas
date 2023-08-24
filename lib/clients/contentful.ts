import { createClient } from 'contentful';
import {
  AboutText,
  BlogPost,
  BlogPostDetailed,
  CodeProject,
  CodeProjectDetailed,
  PhotoProject,
  PhotoProjectDetailed,
  VideoProject,
  VideoProjectDetailed,
} from '../types';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const fetchContentfulData = async (query: string): Promise<any> => {
  const res: any = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  );
  const data = res.json();
  return data;
};

export const getPhotoProjects = async (): Promise<PhotoProject[]> => {
  let query = `{
        galleryCollection(order: order_DESC){
            items{
                slug
                title
                cover{
                    url
                }
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const photoProjects: PhotoProject[] = res.data.galleryCollection.items || [];
  return photoProjects;
};

export const getPhotoProject = async (
  slug: string
): Promise<PhotoProjectDetailed | null> => {
  let query = `{
    galleryCollection(where: { slug: "${slug}" }, limit: 1) {
      items {
        slug
        title
        cover {
          url
        }
        imagesCollection{
          items{
            url
          }
        }
      }
    }
  }`;
  const res = await fetchContentfulData(query);
  const photoProject: PhotoProjectDetailed | null =
    res.data.galleryCollection.items[0] || null;
  return photoProject;
};

export const getAboutText = async (): Promise<AboutText | null> => {
  let query = `{
        aboutTextCollection(limit: 1){
            items{
              title
              content{
                json
                links{
                  assets {
                    block {
                      sys {
                        id
                      }
                      url
                      title
                      width
                      height
                      description
                    }
                  }
                }
              }
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const aboutText: AboutText | null =
    res.data.aboutTextCollection.items[0] || null;
  return aboutText;
};

export const getCodeProjects = async (): Promise<CodeProject[]> => {
  let query = `{
        projectCollection(order: order_DESC){
            items{
                cover{
                    url
                }
                title
                tagline
                slug
                hasDarkBackground
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const codeProjects: CodeProject[] = res.data.projectCollection.items || [];
  return codeProjects;
};

export const getCodeProject = async (
  slug: string
): Promise<CodeProjectDetailed | null> => {
  let query = `{
        projectCollection(where: { slug: "${slug}" }, limit: 1){
            items{
                slug
                title
                tagline
                cover{
                    url
                }
                url
                hasDarkBackground
                content{
                  json
                  links{
                    assets {
                      block {
                        sys {
                          id
                        }
                        url
                        title
                        width
                        height
                        description
                      }
                    }
                  }
                }
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const codeProject: CodeProjectDetailed | null =
    res.data.projectCollection.items[0] || null;
  return codeProject;
};

export const getVideoProjects = async (): Promise<VideoProject[]> => {
  let query = `{
        videoCollection(order: order_DESC){
            items{
                title
                slug
                cover{
                    url
                }
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const videoProjects: VideoProject[] = res.data.videoCollection.items || [];
  return videoProjects;
};

export const getVideoProject = async (
  slug: string
): Promise<VideoProjectDetailed | null> => {
  let query = `{
        videoCollection(where: { slug: "${slug}" }, limit: 1){
            items{
                title
                slug
                cover{
                    url
                }
                file{
                  url
                }
                youtubeId
                aspectRatio
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const videoProject: VideoProjectDetailed | null =
    res.data.videoCollection.items[0] || null;
  return videoProject;
};

export const getBlogposts = async (): Promise<BlogPost[]> => {
  let query = `{
        blogPostCollection{
            items{
                slug
                title
                date
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const blogPosts: BlogPost[] = res.data.blogPostCollection.items || [];
  return blogPosts;
};

export const getBlogpost = async (
  slug: string
): Promise<BlogPostDetailed | null> => {
  let query = `{
        blogPostCollection(where: { slug: "${slug}" }, limit: 1){
            items{
                slug  
                title
                tagline
                date
                content{
                  json
                  links{
                    assets {
                      block {
                        sys {
                          id
                        }
                        url
                        title
                        width
                        height
                        description
                      }
                    }
                  }
                }
            }
        }
    }`;
  const res = await fetchContentfulData(query);
  const blogPost: BlogPostDetailed | null =
    res.data.blogPostCollection.items[0] || null;
  return blogPost;
};
