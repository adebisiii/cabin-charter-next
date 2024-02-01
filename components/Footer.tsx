import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mb-4">
        <div className="flex flex-col md:mb-6 md:flex-row md:items-center md:justify-between md:pt-6 lg:mb-8 lg:pt-8">
          <div className="order-2 pt-4 md:order-none md:pt-0 lg:shrink-0">
            <p className="text-center text-sm font-normal capitalize leading-6 text-gray-dark md:text-left 3xl:text-base">
              Copyright © 2024{" "}
              <a
                href="https://www.guletvoyage.com"
                rel="noreferrer noopener"
                target="_blank"
                className="font-semibold hover:underline"
              >
                Guletvoyage
              </a>{" "}
              All rights reserved
            </p>
          </div>
          <nav className="order-1 border-b border-gray-lighter pb-4 md:order-none md:border-b-0 md:pb-0">
            <ul className="flex flex-wrap items-center justify-center md:justify-end">
              <li className="px-4 first:pl-0 last:pr-0 lg:px-6">
                <a
                  className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="px-4 first:pl-0 last:pr-0 lg:px-6">
                <a
                  className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                  href="/"
                >
                  Explore
                </a>
              </li>
              <li className="px-4 first:pl-0 last:pr-0 lg:px-6">
                <a
                  className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                  href="/"
                >
                  Pricing
                </a>
              </li>
              <li className="px-4 first:pl-0 last:pr-0 lg:px-6">
                <a
                  className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                  href="/"
                >
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
