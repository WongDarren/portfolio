"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs() {
  return (
    <div>
      <ChevronRightIcon
        className={"h-5 w-5 flex-shrink-0 text-gray-400"}
        aria-hidden={"true"}
      />
    </div>
  );
}
