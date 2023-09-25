import {
  getBlogposts,
  getCodeProjects,
  getPhotoProjects,
  getVideoProjects,
} from '@/lib/clients/contentful';

export default async function sitemap() {
  const base = ['', '/code', '/photo', '/video', '/blog'].map((route) => ({
    url: `https://lukashoppe.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  const codeProjects = await getCodeProjects();
  const photoProjects = await getPhotoProjects();
  const videoProjects = await getVideoProjects();
  const blogPosts = await getBlogposts();

  codeProjects.map((project) => ({
    url: `https://lukashoppe.com/code/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  codeProjects.map((project) => ({
    url: `https://lukashoppe.com/code/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  photoProjects.map((project) => ({
    url: `https://lukashoppe.com/photo/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  videoProjects.map((project) => ({
    url: `https://lukashoppe.com/video/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  blogPosts.map((project) => ({
    url: `https://lukashoppe.com/blog/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  return [
    ...base,
    ...codeProjects,
    ...photoProjects,
    ...videoProjects,
    ...blogPosts,
  ];
}
