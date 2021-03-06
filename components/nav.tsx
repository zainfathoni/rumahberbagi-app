import * as React from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Stopwatch20Icon } from "./icons/stopwatch-20";
import { SoupIcon } from "./icons/soup";
import { HouseNightIcon } from "./icons/house-night";
import Image from "next/image";

export const Nav = (): JSX.Element => {
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const router = useRouter();
  const isSubmenuActive = router.pathname.startsWith("/downloads");

  React.useEffect(() => {
    setIsSubmenuOpen(false);
    setIsMobileOpen(false);
  }, [router.asPath]);

  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Rumah Berbagi</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/rumah-berbagi.svg"
                  alt=""
                  height={32}
                  width={32}
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileOpen ? "true" : "false"}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="https://rumahberbagi.com">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                type="button"
                className={`${
                  isSubmenuActive ? "text-gray-900" : "text-gray-500"
                } group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                aria-expanded="false"
              >
                <span>Downloads</span>
                <svg
                  className={`${
                    isSubmenuActive ? "text-gray-600" : "text-gray-400"
                  } ml-2 h-5 w-5 group-hover:text-gray-500`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <Transition
                show={isSubmenuOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <Link href="/downloads/15-days-countdown-to-ramadhan">
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                          <Stopwatch20Icon />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            15 Days Countdown to Ramadhan
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Ramadhan Preparation
                          </p>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/rencana-menu-ramadhan">
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                          <SoupIcon />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Rencana Menu Ramadhan
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Ramadhan Preparation
                          </p>
                        </div>
                      </a>
                    </Link>
                    <Link href="/downloads/ramadhan-planner-for-kids-1442h">
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                          <HouseNightIcon />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Ramadhan Planner for Kids (untuk Anak-anak) Tahun
                            1442H/2021M
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Ramadhan Preparation
                          </p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </Transition>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/#daftar">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Daftar
              </a>
            </Link>
          </div>
        </div>

        <Transition
          show={isMobileOpen}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/rumah-berbagi.svg"
                    alt="Rumah Berbagi"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  <Link href="/downloads/15-days-countdown-to-ramadhan">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                        <Stopwatch20Icon />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        15 Days Countdown to Ramadhan
                      </div>
                    </a>
                  </Link>
                  <Link href="/downloads/rencana-menu-ramadhan">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                        <SoupIcon />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Rencana Menu Ramadhan
                      </div>
                    </a>
                  </Link>
                  <Link href="/downloads/ramadhan-planner-for-kids-1442h">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                        <HouseNightIcon />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Ramadhan Planner for Kids (untuk Anak-anak) Tahun
                        1442H/2021M
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link href="https://rumahberbagi.com">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/#daftar">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Daftar
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
};
