import React from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IMarque {
  nameBn: string;
  today: number;
  categoryIcon: string;
  change: {
    dir: string;
    pct: number;
  };
}

const Marque = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IMarque[] = await res.json();
  console.log(data);

  return (
    <div className=" bg-white">
      <MarqueeText direction="right" duration={20} className="shadow-sm">
        {data.map((h) => (
          <span
            className="px-4 shadow-2xl flex gap-1 items-center"
            key={h.nameBn}
          >
            {h.categoryIcon} {h.nameBn}{" "}
            {h.change.dir === "up" ? (
              <div className="text-green-700 flex">
                <GoTriangleUp /> <p>{h.change.pct}%</p>
              </div>
            ) : (
              <div className="text-red-700 flex">
                <GoTriangleDown /> <p>{h.change.pct}%</p>
              </div>
            )}
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marque;
