import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getAlbums = async () => {
  let query = `{
        galleryCollection{
            items{
                cover{
                    url
                }
                title
                slug
            }
        }
    }`;

  return fetchContentfulData(query);
};

export const getAlbum = async (slug: string) => {
  let query = `{
    galleryCollection(where: { slug: "${slug}" }, limit: 1) {
      items {
        cover {
          url
        }
        title
        slug
        imagesCollection{items{url}}
      }
    }
  }`;
  return fetchContentfulData(query);
};

const fetchContentfulData = async (query: string) => {
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

export const getAboutText = async () => {
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
  return fetchContentfulData(query);
};

export const getCodeProjects = async () => {
  let query = `{
        projectCollection{
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
  return fetchContentfulData(query);
};

export const getCodeProject = async (slug: string) => {
  let query = `{
        projectCollection(where: { slug: "${slug}" }, limit: 1){
            items{
                cover{
                    url
                }
                hero{
                  url
                }
                url
                slug
                title
                tagline
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
  return fetchContentfulData(query);
};

export const getVideos = async () => {
  let query = `{
        videoCollection{
            items{
                cover{
                    url
                }
                title
                file{
                  url
                }
                slug
            }
        }
    }`;

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

export const getVideo = async (slug: string) => {
  let query = `{
        videoCollection(where: { slug: "${slug}" }, limit: 1){
            items{
                cover{
                    url
                }
                title
                file{
                  url
                }
                slug
                aspectRatio
            }
        }
    }`;

  return fetchContentfulData(query);
};

export const getBlogposts = async () => {
  let query = `{
        blogPostCollection{
            items{
                title
                slug
                date
            }
        }
    }`;

  return fetchContentfulData(query);
};

export const getBlogpost = async (slug: string) => {
  let query = `{
        blogPostCollection(where: { slug: "${slug}" }, limit: 1){
            items{
                title
                tagline
                slug
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

  return fetchContentfulData(query);
};
