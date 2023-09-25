import {
  getBlogposts,
  getCodeProjects,
  getPhotoProjects,
  getVideoProjects,
} from '@/lib/clients/contentful';

export default async function sitemap() {
  const baseUrls = ['', '/code', '/photo', '/video', '/blog'].map((route) => ({
    url: `https://lukashoppe.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  const codeProjects = await getCodeProjects();
  const photoProjects = await getPhotoProjects();
  const videoProjects = await getVideoProjects();
  const blogPosts = await getBlogposts();

  const codeUrls = codeProjects.map((project) => ({
    url: `https://lukashoppe.com/code/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const photoUrls = photoProjects.map((project) => ({
    url: `https://lukashoppe.com/photo/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  const videoUrls = videoProjects.map((project) => ({
    url: `https://lukashoppe.com/video/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  const blogUrls = blogPosts.map((project) => ({
    url: `https://lukashoppe.com/blog/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  return [...baseUrls, ...codeUrls, ...photoUrls, ...videoUrls, ...blogUrls];
}
