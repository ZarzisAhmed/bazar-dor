import { IProduct } from "@/app/page";
import React from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

interface ISmallProductCard {
  products: IProduct[];
}

const SmallProductCard = ({ products }: ISmallProductCard) => {
  return (
    <>
      <div className="sm:container sm:mx-auto mt-7 mx-3">
        <h1 className="text-xl font-bold">সব পণ্য</h1>
        <p className="text-gray-500">{`মোট ${products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`}</p>
      </div>
      <div className="mx-3 grid lg:grid-cols-3 md:grid-cols-2 sm:container sm:mx-auto gap-7 my-7">
        {products.map((p: IProduct) => (
          <div key={p.id} className="card bg-base-100 card-xs shadow-sm">
            <div className="card-body p-5">
              <div className="flex gap-3">
                <h1 className="text-3xl bg-green-50 p-2 rounded-2xl">
                  {p.image}
                </h1>
                <div>
                  <h2 className="card-title text-xl">{p.nameBn}</h2>
                  <h2 className="text-sm">প্রতি {p.unit}</h2>
                </div>
              </div>

              <p className="text-sm">আজকের দাম</p>
              <div className="flex">
                <p className="text-sm">
                  <span className="text-xl font-bold">
                    {p.today.toLocaleString("bn-BD")}
                  </span>{" "}
                  টাকা
                </p>
                <div className="bg-green-50 py-2 px-3 rounded-2xl">
                  {p.change.dir === "up" ? (
                    <div className="text-green-600 flex text-sm items-center">
                      <GoTriangleUp /> {p.change.pct.toLocaleString("bn-BD")} %
                    </div>
                  ) : (
                    <div className="text-red-600 flex text-sm items-center">
                      <GoTriangleDown /> {p.change.pct.toLocaleString("bn-BD")}{" "}
                      %
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SmallProductCard;
