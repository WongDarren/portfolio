'use client';

import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import aiImage from '../../../../public/works/ai-thing.png';
import Image from 'next/image';
import { Breadcrumbs } from '@/components';
import { usePathname } from 'next/navigation';

interface ListItemProps {
  children: string;
  label: string;
}

const ListItem = ({ children, label }: ListItemProps) => {
  return (
    <li className="flex gap-x-3">
      <CheckCircleIcon
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
      />
      <span>
        <strong className="font-semibold text-gray-900">{label}</strong>{' '}
        {children}
      </span>
    </li>
  );
};

const Page = () => {
  const currentRoute = usePathname();

  return (
    <div className="bg-white px-6 py-12 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Breadcrumbs currentPage="AI Thing" currentRoute={currentRoute} />
        <figure>
          <Image
            className="mt-8 aspect-video rounded-xl bg-gray-50 object-cover"
            src={aiImage}
            alt="ai-thing image"
          />
        </figure>
        <p className="pt-8 text-base font-semibold leading-7 text-indigo-600">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          AI Thing
        </h1>
        <p className="mt-6 text-xl leading-8">
          AI Thing with DALL-E is an application that leverages trending
          technologies to enable users to generate high-quality images using
          OpenAI's DALL-E machine learning model. The application has been built
          using a variety of technologies, including Vite, TypeScript, Tailwind
          CSS, MongoDB, Cloudinary, and OpenAI.
        </p>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Features
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <ListItem label="Vite">
              A fast build tool for modern web applications used to enhance the
              application's performance and development speed.
            </ListItem>
            <ListItem label="TypeScript">
              A popular language for building large-scale web applications used
              to provide type checking and enhanced code reliability.
            </ListItem>
            <ListItem label="Tailwind CSS">
              A highly customizable CSS framework used to provide a clean and
              modern design for the application's interface.
            </ListItem>
            <ListItem label="MongoDB">
              Used as the primary database to store name, image prompt, and
              image url.
            </ListItem>
            <ListItem label="Cloudinary">
              Used to upload image and get back the image url.
            </ListItem>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Learn More
          </h2>
          <div>
            <div className="my-2 flex">
              <span className="mr-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                Source
              </span>{' '}
              <a
                href="https://github.com/WongDarren/ai-thing"
                target="_blank"
                className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
              >
                AI Thing
              </a>
            </div>
            <div className="my-2 flex">
              <span className="mr-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                Code
              </span>{' '}
              <p>Vite, TypeScript, Tailwind CSS, MongoDB, Cloudinary, OpenAI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
