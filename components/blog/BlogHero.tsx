import { BackgroundHero } from "../ui/heroes/BackgroundHero";

export function BlogHero() {
  return (
    <BackgroundHero
      id="blog-home"
      image={{
        src: "/images/blogs/blog-bg.png",
      }}
      breadcrumb={[
        {
          label: "Blog",
        },
      ]}
      badge="Scalable • Secure • Product-Focused"
      title={
        <>
          Insights on marketing, technology {" "}
          <span className="text-primary">and business growth</span>
        </>
      }
      description="Practical guides on B2B marketing, SEO, websites and technology, written for teams that want better results online."

      overlay="bg-[#040506]/70"
    />
  );
}
