import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug as string }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { title: "Project not found" };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | Dava Rajif`,
      description: product.description,
      images: [{ url: product.thumbnail.src }],
    },
  };
}

export default function SingleProjectPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) notFound();

  return (
    <div className="relative min-h-screen">
      <Container>
        <SingleProduct product={product} />
      </Container>
    </div>
  );
}
