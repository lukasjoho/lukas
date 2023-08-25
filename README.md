<div align="center" >
    <h1 align="center">My personal website</h1>
    <p>Hey, I am Lukas. This is my personal website built with NextJS 13, Tailwind, Contentful and Cloudinary. <br/>Have fun exploring.</p>
    🌐 <a href="https://lukashoppe.com/">lukashoppe.com</a>
    <br/>
    <br/>
</div>

![Alt text](https://res.cloudinary.com/dum2lqmke/image/upload/v1692968220/my-website_ytu9au.jpg)

# Tools

This personal website is statically generated and uses as little dependencies as possible:

- [NextJS 13](https://nextjs.org/docs): Frontend UI
- [TailwindCSS](https://tailwindcss.com): CSS Styling
- [Contentful](https://contentful.com): Content Management System
- [Cloudinary](https://cloudinary.com): Image Optimization
- [Framer Motion](https://www.framer.com/motion): UI Animations
- [Lottie](https://lottiefiles.com): Special Animations

# Setup

## Installation

Run the following command to install all dependencies:

```sh-session
npm install
```

## Environment Variables

1. Set up a Contentful space on https://contentful.com and copy Space ID and Access Token. The URL is just needed for generating the correct `<meta>` tags.
2. Create `.env` file and paste the variables.

```sh-session
NEXT_PUBLIC_CONTENTFUL_SPACE_ID='xxx'
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN='xxx'
NEXT_PUBLIC_URL='https://xxx.com'
```

## Run

To run the project locally, use the following command:

```sh-session
npm run dev
```

## Deploy

1. Create project in Vercel importing the repo from GitHub.
2. Set environment variables

![Alt text](https://res.cloudinary.com/dum2lqmke/image/upload/v1692968740/Screenshot_2023-08-25_at_15.04.23_hgdreq.png)
