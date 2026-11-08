"use client";
import React, { useSyncExternalStore } from "react";
import bannerLogo from "@/images/bazar-hero.png";
import Image from "next/image";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Banner = () => {
  const formattedDate = useSyncExternalStore(subscribe, getDate, () => "");

  return (
    <div className="mx-auto max-w-xs  bg-white p-10 rounded-2xl flex-col items-center justify-center  sm:container sm:mx-auto my-3 sm:grid sm:grid-cols-3">
      <div className="col-span-2 space-y-8">
        <span className="px-2 py-0.5 bg-green-200 text-green-800 rounded-2xl">
          {formattedDate}
        </span>
        <h1 className="sm:text-5xl text-2xl font-bold mt-6">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-gray-400 text-2">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
      </div>

      <div className="col-span-1 flex items-center justify-center">
        <Image
          src={bannerLogo}
          height={350}
          width={350}
          alt="Banner pictuer"
        ></Image>
      </div>
      <div className="flex justify-center sm:justify-start">
        <button className="btn px-5 py-7 my-8 bg-green-600 text-white text-xl rounded-2xl">
          সব পণ্য দেখুন
        </button>
      </div>
    </div>
  );
};

export default Banner;
