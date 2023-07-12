import Link from "next/link";
import { useTranslation } from "next-i18next";

interface FooterProps {
    className?: string;
}

export default function Footer(props: FooterProps) {

  const {t} = useTranslation("footer");

  return (
    <footer className={props.className}>
      <div className="w-full h-full px-5 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <Link href="/" className="hover:underline">
            {" "}Olivier Coffee™
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/story" className="mr-4 hover:underline md:mr-6 ">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href="/licence" className="mr-4 hover:underline md:mr-6">
              {t("licence")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
