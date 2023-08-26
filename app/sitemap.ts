export default async function sitemap() {
  const routes = ['', '/code', '/photo', '/video', '/blog'].map((route) => ({
    url: `https://lukashoppe.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  return [...routes];
}
