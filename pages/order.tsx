import OrderBanner from "./components/OrderBanner";
import OrderForm from "./components/OrderForm";

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
