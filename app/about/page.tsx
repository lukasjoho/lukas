'use client';
import CloudImage from '@/components/CloudinaryImage';
import Container from '@/components/Container';
import { getCloudinaryImage } from '@/lib/cloudinary';
import { AdvancedImage, responsive } from '@cloudinary/react';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <Container>
        <div className="aspect-[16/9] overflow-hidden flex items-end">
          <CloudImage src="https://images.ctfassets.net/wbsnk5ktra07/6AiqcBeBq1C2lwmDF8FmtB/0fd4e384d9fc323a73b210587400dba0/code-cover-lancie.jpg" />
        </div>
        <h1>Hey, it is Lukas.</h1>
        <h2>I like to build.</h2>
        <p>When I say build</p>
      </Container>
    </div>
  );
};

export default AboutPage;
