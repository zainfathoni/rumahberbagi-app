import * as React from "react";
import Link from "next/link";

export const CtaTitle = ({ children }) => (
  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
    <span className="block">{children}</span>
  </h2>
);

export const CtaDescription = ({ children }) => (
  <p className="mt-4 text-lg leading-6 text-indigo-200">{children}</p>
);

export const CtaButton = ({ children }) => (
  <Link
    href="https://rbagi.id/daftar"
    target="_blank"
    rel="noopener noreferrer"
  >
    <a className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">
      {children}
    </a>
  </Link>
);

export const CtaSection = ({ children }) => (
  <div className="bg-white" id="daftar">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">{children}</div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            src="/images/contoh-handout.jpeg"
            alt="Contoh handout"
          />
        </div>
      </div>
    </div>
  </div>
);
