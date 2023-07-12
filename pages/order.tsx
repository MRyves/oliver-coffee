import OrderBanner from "../src/components/Banners/OrderBanner";
import OrderForm from "../src/components/OrderForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Order() {
  return (
    <>
      <OrderBanner />
      <section
        id="order-coffee"
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        <OrderForm />
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["order", "footer", "header"])),
    },
  };
}