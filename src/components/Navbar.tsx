"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
}

const NavBarItem = ({ href, children }: LinkItemProps) => {
  const currentRoute = usePathname();

  return (
    <Link
      href={href}
      className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 ${
        currentRoute === href
          ? "border-indigo-500 text-gray-900 "
          : "border-transparent text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

const MenuItem = ({ href, children }: LinkItemProps) => {
  const currentRoute = usePathname();

  return (
    <Disclosure.Button
      className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 ${
        currentRoute === href
          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
          : "border-transparent text-gray-500"
      }`}
    >
      <Link href={href}>{children}</Link>
    </Disclosure.Button>
  );
};

const Navbar = () => {
  return (
    <Disclosure as={"nav"} className={"bg-white"}>
      {({ open }) => (
        <>
          <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
            <div className={"flex h-16 justify-between"}>
              <div className={"flex"}>
                <div className={"hidden sm:ml-6 sm:flex sm:space-x-8"}>
                  <NavBarItem href={"/"}>Home</NavBarItem>
                  <NavBarItem href={"/works"}>Works</NavBarItem>
                </div>
              </div>
              <div className={"-mr-2 flex items-center sm:hidden"}>
                {/* Mobile menu button */}
                <Disclosure.Button
                  className={
                    "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  }
                >
                  <span className={"sr-only"}>Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className={"block h-6 w-6"}
                      aria-hidden={"true"}
                    />
                  ) : (
                    <Bars3Icon
                      className={"block h-6 w-6"}
                      aria-hidden={"true"}
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={"sm:hidden"}>
            <div className={"space-y-1 pt-2 pb-3"}>
              <MenuItem href={"/"}>Home</MenuItem>
              <MenuItem href={"/works"}>Works</MenuItem>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
