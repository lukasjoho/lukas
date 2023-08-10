import Panel from "@/components/Panel";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 w-full grow p-4 pt-0 relative">
      <Panel
        title="code"
        emoji="👨‍💻"
        href="/code"
        image="assets/image-code.png"
      />
      <Panel
        title="photo"
        emoji="📸"
        href="/photo"
        image="assets/image-photos.png"
      />
      <Panel
        title="video"
        emoji="📺"
        href="/video"
        image="assets/image-video.png"
      />
      <Panel
        title="blog"
        emoji="👋"
        href="/blog"
        image="assets/image-articles.png"
      />
      <img
        src="assets/lukas.jpg"
        alt=""
        className="w-[120px] md:w-[200px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 md:border-[16px] border-white"
      />
    </div>
  );
}
