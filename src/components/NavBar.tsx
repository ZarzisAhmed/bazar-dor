"use client";
import Image from "next/image";
import logo from "@/images/logo-icon.png";
import rice from "@/images/Nav/🍚.svg";
import tel from "@/images/Nav/🛢️.svg";
import dal from "@/images/Nav/🫘.svg";
import shobji from "@/images/Nav/🥬.svg";
import mach from "@/images/Nav/🐟.svg";
import dudh from "@/images/Nav/🥛.svg";
import mangsho from "@/images/Nav/🍗.svg";
import moshle from "@/images/Nav/🌶️.svg";
import Link from "next/link";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const NavBar = () => {
  const formattedDate = useSyncExternalStore(subscribe, getDate, () => "");

  return (
    <div className="bg-white">
      <div className="shadow-sm">
        {/* Main Navbar */}
        <div className="shadow-sm">
          <div className="navbar container mx-auto">
            <div className="navbar-start">
              {/* Mobile Menu */}
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    aria-label="Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                  <Link href="/" className="text-xl font-semibold">
                    বাজার দর
                  </Link>

                  <h1 className="text-sm text-gray-500">{formattedDate}</h1>
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

        {/* Category Navigation */}
        <div className="container mx-auto py-2 flex gap-5">
          <Link href="/" className="flex gap-2 items-center">
            <Image src={rice} alt="চাল" height={20} width={20} />
            <span>চাল</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={dal} alt="চাল" height={20} width={20} />
            <span>ডাল</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={tel} alt="চাল" height={20} width={20} />
            <span>তেল</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={shobji} alt="চাল" height={20} width={20} />
            <span>সবজি</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={mach} alt="চাল" height={20} width={20} />
            <span>মাছ</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={mangsho} alt="চাল" height={20} width={20} />
            <span>মাংস</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={dudh} alt="চাল" height={20} width={20} />
            <span>ডিম-দুধ</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={moshle} alt="চাল" height={20} width={20} />
            <span>মসলা</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
