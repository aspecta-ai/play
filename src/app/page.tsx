import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="p-10">
        <ul className="">
          <li>
            <Link href="/iframes">iframes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
