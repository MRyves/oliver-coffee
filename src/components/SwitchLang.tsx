import Link from "next/link";
import { useRouter } from "next/router";

export default function SwitchLang() {
  const router = useRouter();
  const isEnglish = router.locale === "en";

  return (
    <div>
      {isEnglish ? (
        <Link href="/" locale="de-CH">
          DE
        </Link>
      ) : (
        <Link href="/" locale="en">
          EN
        </Link>
      )}
    </div>
  );
}
