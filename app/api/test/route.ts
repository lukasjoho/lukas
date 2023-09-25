import { getCodeProjects } from '@/lib/clients/contentful';
import { NextResponse } from 'next/server';

export async function GET() {
  const codeProjects = await getCodeProjects();
  codeProjects.map((project) => ({
    url: `https://lukashoppe.com/code/${project.slug}`,
  }));
  return NextResponse.json(codeProjects);
}
