import Banner from "@/components/Banner";
import SmallProductCard from "@/components/cards/SmallProductCard";
import { Suspense } from "react";

export interface IProduct {
  id: number;
  nameBn: string;
  unit: string;
  today: number;
  image: string;
  change: {
    dir: string;
    pct: number;
  };
}

const productsPromise = async (): Promise<IProduct[]> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  return res.json();
};

async function Products() {
  const products = await productsPromise();

  return <SmallProductCard products={products} />;
}

export default function Home() {
  return (
    <div className="bg-green-50 mt-7">
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Products />
      </Suspense>
    </div>
  );
}
