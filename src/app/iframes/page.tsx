'use client';

import Link from 'next/link';
import { useState } from 'react';

const demoUrls = [
  'https://medium.com/google-design',
  'https://medium.com/google-design/improving-comprehension-through-intuitive-actions-f7e6336e12e6',
  'https://twitter.com/newblashkingdom',
  'https://twitter.com/nuxt_js/status/1739340710908756183',
  'https://github.com/daimajia',
  'https://github.com/daimajia/AndroidViewAnimations',
  'https://play.linwise.com/iframes',
];

export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const [url, setUrl] = useState(searchParams.url);

  return (
    <div className="p-10">
      <div className="">
        <form className="flex gap-4">
          <div className="flex-1">
            <input
              className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="flex-none">
            <Link
              role="button"
              className="grid h-10 place-items-center rounded-lg bg-blue-700 px-20 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={`/iframes?url=${url}`}
            >
              Go
            </Link>
          </div>
        </form>

        <ol className="mt-4 list-inside list-decimal space-y-1 text-gray-500 dark:text-gray-400">
          {demoUrls.map((e) => (
            <li key={e}>
              try: &nbsp;
              <a href={`/iframes?url=${e}`} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                {e}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 h-[500px] max-w-[calc(100vw-)] cursor-col-resize resize overflow-auto rounded border border-neutral-300 p-10">
        {typeof searchParams.url === 'string' ? (
          <iframe
            src={searchParams.url}
            width="100%"
            height="100%"
            onResize={(e) => {
              console.log('e', e);
            }}
          ></iframe>
        ) : (
          'no data'
        )}
      </div>
    </div>
  );
}
