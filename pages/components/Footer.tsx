import Link from "next/link";

interface FooterProps {
    className?: string;
}

export default function Footer(props: FooterProps) {
  return (
    <footer className={props.className}>
      <div className="w-full mx-auto p-5 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Oliver Coffee™
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/Story" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/Story" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/Story" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="/Story" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
