import React from "react";
import Link from "next/link";
import Image from "next/image";
import works from "@/app/works/works";

const Page = () => {
  return (
    <div className={"bg-white py-12 sm:py-12"}>
      <div className={"mx-auto max-w-7xl px-6 lg:px-8"}>
        <div className={"mx-auto max-w-2xl text-center"}>
          <h2
            className={
              "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            }
          >
            Projects
          </h2>
          <p className={"mt-2 text-lg leading-8 text-gray-600"}>
            A few things I've made for fun.
          </p>
        </div>
        <div
          className={
            "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          }
        >
          {works.map(work => (
            <article
              key={work.id}
              className={"flex flex-col items-start justify-between"}
            >
              <div className={"relative w-full"}>
                <Link href={work.href}>
                  <Image
                    src={work.imageUrl}
                    alt={"thumbnail"}
                    className={
                      "aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    }
                  />
                  <div
                    className={
                      "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
                    }
                  />
                </Link>
              </div>
              <div className={"max-w-xl"}>
                <div className={"mt-8 flex items-center gap-x-4 text-xs"}>
                  <time dateTime={work.datetime} className={"text-gray-500"}>
                    {work.date}
                  </time>
                  {work.categories.map(category => (
                    <a
                      key={category.id}
                      href={category.href}
                      target={"_blank"}
                      className={
                        "relative z-10 rounded-full bg-gray-50 py-1.5 px-2 font-medium text-gray-600 hover:bg-gray-100"
                      }
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
                <div className={"group relative"}>
                  <h3
                    className={
                      "mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                    }
                  >
                    <Link href={work.href}>
                      <span className={"absolute inset-0"} />
                      {work.title}
                    </Link>
                  </h3>
                  <p
                    className={
                      "mt-5 text-sm leading-6 text-gray-600 line-clamp-3"
                    }
                  >
                    {work.description}
                  </p>
                </div>
                <div className={"relative mt-8 flex items-center gap-x-4"}>
                  <Image
                    src={work.author.imageUrl}
                    alt={"author image"}
                    className={"h-10 w-10 rounded-full bg-gray-100"}
                  />
                  <div className={"text-sm leading-6"}>
                    <p className={"font-semibold text-gray-900"}>
                      <a href={work.author.href} target={"_blank"}>
                        <span className={"absolute inset-0"} />
                        {work.author.name}
                      </a>
                    </p>
                    <p className={"text-gray-600"}>{work.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
