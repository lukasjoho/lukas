import CloudImage from '@/components/CloudinaryImage';
import { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const { title, tagline, cover, hasDarkBackground } = project;
  return (
    <div className="relative aspect-[9/8] w-full pt-6 md:pt-8 pl-5 md:pl-6 rounded-xl overflow-hidden">
      <div className="w-full h-full absolute left-0 top-0">
        <CloudImage src={cover.url} steps={[400, 500, 600, 700, 800]} />
      </div>

      <div className="relative z-10 font-meche">
        <h1
          className={cn(
            'font-medium text-dark text-3xl md:text-4xl',
            hasDarkBackground && 'text-white'
          )}
        >
          {title}
        </h1>
        <h2
          className={cn(
            'text-sm text-gray-400',
            hasDarkBackground && 'text-white/70'
          )}
        >
          {tagline}
        </h2>
      </div>
    </div>
  );
};

export default ProjectItem;
