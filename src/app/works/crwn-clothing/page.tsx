"use client";

import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import crwnImage from "../../../../public/works/crwn.png";
import Image from "next/image";
import { Breadcrumbs } from "@/components";
import { usePathname } from "next/navigation";

interface ListItemProps {
  children: string;
  label: string;
}

const ListItem = ({ children, label }: ListItemProps) => {
  return (
    <li className={"flex gap-x-3"}>
      <CheckCircleIcon
        className={"mt-1 h-5 w-5 flex-none text-indigo-600"}
        aria-hidden={"true"}
      />
      <span>
        <strong className={"font-semibold text-gray-900"}>{label}</strong>{" "}
        {children}
      </span>
    </li>
  );
};

const Page = () => {
  const currentRoute = usePathname();

  return (
    <div className={"bg-white py-12 px-6 sm:py-12 lg:px-8"}>
      <div className={"mx-auto max-w-3xl text-base leading-7 text-gray-700"}>
        <Breadcrumbs
          currentPage={"Crwn Clothing"}
          currentRoute={currentRoute}
        />
        <figure>
          <Image
            className={"mt-8 aspect-video rounded-xl bg-gray-50 object-cover"}
            src={crwnImage}
            alt={"crwn clothing image"}
          />
        </figure>
        <p className={"pt-8 text-base font-semibold leading-7 text-indigo-600"}>
          Introducing
        </p>
        <h1
          className={
            "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          }
        >
          Crwn Clothing
        </h1>
        <p className={"mt-6 text-xl leading-8"}>
          This e-commerce site provides an intuitive shopping experience for
          customers, with a minimalistic design and easy navigation. The use of
          GraphQL allows for efficient data fetching, reducing the number of
          network requests and improving site performance. The combination of
          React, Redux, and Hooks provides a scalable and maintainable codebase,
          allowing for easy feature additions and bug fixes.
        </p>
        <div className={"mt-10 max-w-2xl"}>
          <h2
            className={"mt-16 text-2xl font-bold tracking-tight text-gray-900"}
          >
            Features
          </h2>
          <ul role={"list"} className={"mt-8 max-w-xl space-y-8 text-gray-600"}>
            <ListItem label={"React Router"}>
              Features a responsive pages with hyperlinks to distinct clothing
              categories, integrated using React Router.
            </ListItem>
            <ListItem label={"Google Firebase"}>
              Authentication service is utilized to implement secure user
              sign-in functionality, with user data stored in a NoSQL Cloud
              Firestore database.
            </ListItem>
            <ListItem label={"React State"}>
              The cart feature is implemented using React state management, with
              items added and removed using state hooks and localStorage for
              persistent storage.
            </ListItem>
            <ListItem label={"Stripe API"}>
              Payment processing is handled through the Stripe API, which
              securely collects and validates user payment information before
              submitting it to the Stripe server for processing.
            </ListItem>
          </ul>
          <h2
            className={"mt-16 text-2xl font-bold tracking-tight text-gray-900"}
          >
            Learn More
          </h2>
          <div>
            <div className={"my-2 flex"}>
              <span
                className={
                  "mr-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                }
              >
                Source
              </span>{" "}
              <a
                href={"https://github.com/WongDarren/crwn-clothing"}
                target={"_blank"}
                className={
                  "font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                }
              >
                Crwn Clothing
              </a>
            </div>
            <div className={"my-2 flex"}>
              <span
                className={
                  "mr-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                }
              >
                Code
              </span>{" "}
              <p>React, Redux, Hooks, GraphQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
