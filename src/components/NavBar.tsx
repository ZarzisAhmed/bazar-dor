"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

import logo from "@/images/logo-icon.png";
import rice from "@/images/Nav/🍚.svg";
import tel from "@/images/Nav/🛢️.svg";
import dal from "@/images/Nav/🫘.svg";
import shobji from "@/images/Nav/🥬.svg";
import mach from "@/images/Nav/🐟.svg";
import dudh from "@/images/Nav/🥛.svg";
import mangsho from "@/images/Nav/🍗.svg";
import moshle from "@/images/Nav/🌶️.svg";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const categories = [
  { name: "চাল", icon: rice },
  { name: "ডাল", icon: dal },
  { name: "তেল", icon: tel },
  { name: "সবজি", icon: shobji },
  { name: "মাছ", icon: mach },
  { name: "মাংস", icon: mangsho },
  { name: "ডিম-দুধ", icon: dudh },
  { name: "মসলা", icon: moshle },
];

const NavBar = () => {
  const formattedDate = useSyncExternalStore(subscribe, getDate, () => "");

  return (
    <div className="bg-white">
      <div className="shadow-sm">
        {/* Main Navbar */}
        <div className="shadow-sm">
          <div className="navbar container mx-auto">
            <div className="navbar-start">
              {/* Mobile Hamburger Menu */}
              <div className="dropdown dropdown-start lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost"
                  aria-label="Open navigation menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                {/* Dropdown Categories */}
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-50 mt-3 w-56 p-2 shadow-lg"
                >
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href="/"
                        className="flex flex-row items-center gap-3"
                      >
                        <Image
                          src={category.icon}
                          alt={category.name}
                          width={22}
                          height={22}
                        />
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logo and Website Name */}
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  height={50}
                  width={50}
                  className="bg-green-600 p-3 rounded-2xl"
                />

                <div className="px-3">
                  <Link href="/" className="text-sm sm:text-xl font-semibold">
                    বাজার দর
                  </Link>

                  <h1 className="text-[10px] sm:text-sm text-gray-500">
                    {formattedDate}
                  </h1>
                </div>
              </div>
            </div>

            {/* Authentication Buttons */}
            <div className="navbar-end gap-3">
              <button>সাইন ইন</button>

              <button className="btn bg-green-700 text-white rounded-xl">
                সাইন আপ
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Category Navigation */}
        <div className="container mx-auto py-2 hidden lg:flex gap-5">
          {categories.map((category) => (
            <Link
              href="/"
              key={category.name}
              className="flex gap-2 items-center"
            >
              <Image
                src={category.icon}
                alt={category.name}
                height={20}
                width={20}
              />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
