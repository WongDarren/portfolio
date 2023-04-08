'use client';

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
  currentRoute: string;
}

export default function Breadcrumbs({
  currentPage,
  currentRoute
}: BreadcrumbsProps) {
  return (
    <nav className={'flex'} aria-label={'Breadcrumb'}>
      <ol role={'list'} className={'flex items-center space-x-4'}>
        <li>
          <div>
            <Link href={'/'} className={'text-gray-400 hover:text-gray-500'}>
              <HomeIcon
                className={'h-5 w-5 flex-shrink-0'}
                aria-hidden={'true'}
              />
              <span className={'sr-only'}>Home</span>
            </Link>
          </div>
        </li>
        <li>
          <div className={'flex items-center'}>
            <ChevronRightIcon
              className={'h-5 w-5 flex-shrink-0 text-gray-400'}
              aria-hidden={'true'}
            />
            <Link
              href={'/works'}
              className={
                'ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
              }
              aria-current={'page'}
            >
              Works
            </Link>
          </div>
        </li>
        <li>
          <div className={'flex items-center'}>
            <ChevronRightIcon
              className={'h-5 w-5 flex-shrink-0 text-gray-400'}
              aria-hidden={'true'}
            />
            <Link
              href={currentRoute}
              className={
                'ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
              }
              aria-current={'page'}
            >
              {currentPage}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
