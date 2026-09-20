import { notFound } from "next/navigation";

import { pageData } from "@/lib/data/teknovia-pages";
import DynamicServicePage from "@/components/pages/DynamicServicePage";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return Object.keys(pageData).map((path) => ({
    slug: path.split("/"),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const key = slug.join("/");
  const page = pageData[key];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Teknovia`,
    description: page.description,
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;

  const key = slug.join("/");

  const page = pageData[key];

  if (!page) {
    notFound();
  }

  return <DynamicServicePage data={page} />;
}