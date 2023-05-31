import { FormEvent, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function OrderForm() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNr, setPhoneNr] = useState("");
  const [message, setMessage] = useState("");
  const [isSignNewsletter, setIsSignNewsletter] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState<"success"|"error"|null>(null);

  const handleMessageSent = (successful: boolean) => {
    if (successful) {
      setIsMessageSent("success");
      setName("");
      setEmail("");
      setMessage("");
      setPhoneNr("");
      setIsSignNewsletter(true);
    } else {
      setIsMessageSent("error");
    }

    setTimeout(() => {
      setIsMessageSent(null);
    }, 1000 * 30);
  };


  const submitHanlder = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      name,
      email,
      message,
      phoneNr,
      isSignNewsletter,
    };

    fetch("/api/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => handleMessageSent(res.ok));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-2 mx-auto">
      <div className="text-justify pt-5 md:pt-0 md:px-10">
        <p>
          Thank you for choosing to embark on this journey of taste with Oliver
          Coffee!
        </p>

        <p>
          To order your starter pack, simply fill out the form on this page.
          Each pack costs 50 CHF and includes everything you need to brew around
          120 cups of our delicious Vietnamese coffee.
        </p>

        <p>
          Once you&#39;ve submitted the form, I will personally reach out to you
          to confirm your order and discuss the details. We can talk about your
          specific needs, answer any questions you might have, and ensure that
          your Oliver Coffee experience is tailored just for you.
        </p>

        <p>
          So, ready to brew your own story? Order now, and let&#39;s start this
          flavorful adventure together!
        </p>
      </div>
      <form onSubmit={submitHanlder} className="w-full md:px-8 pt-6 mb-4">
        <div className="mb-4">
          <label
            htmlFor="inp-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Name *
          </label>
          <input
            id="inp-name"
            name="name"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder="e.g. Yves Hendseth"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Email *
          </label>
          <input
            id="inp-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder="e.g. john.doe@gmail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-phonenumber"
            className="inline-block text-gray-700 text-sm font-bold mb-2"
          >
            Phone number
          </label>
          <FaInfoCircle
            id="phone-number-info"
            className="ml-2"
            style={{ display: "inline-block" }}
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          />
          <Tooltip
            anchorSelect="#phone-number-info"
            isOpen={isTooltipOpen}
            closeOnEsc
          >
            <div className="max-w-xs">
              We like to keep things simple and therefor you have the option to
              give your mobile phone number to hear from us via WhatsApp or SMS.
              <br />
              Don&apos;t worry, we will not give your data to anyone!
            </div>
          </Tooltip>
          <input
            id="inp-phonenumber"
            name="phonenumber"
            value={phoneNr}
            onChange={(e) => setPhoneNr(e?.target?.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder="e.g. 079 885 XX XX"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Give us a heads-up!
          </label>
          <textarea
            id="inp-message"
            value={message}
            onChange={(e) => setMessage(e?.target?.value)}
            className="block shadow appearance-none border rounded w-full text-gray-700 text-sm py-2 px-3"
            placeholder="Tell us how you found our page and add your address for faster delivery..."
            rows={5}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            id="checkbox-newsletter"
            type="checkbox"
            checked={isSignNewsletter}
            onChange={() => setIsSignNewsletter(!isSignNewsletter)}
            className="inline-block border rounded text-sm border-gray-700"
          />
          <label
            htmlFor="checkbox-newsletter"
            className="inline-block text-sm italic ml-2"
          >
            Receive our Newsletter
          </label>
        </div>
        <div className="mb-4">
          <button
            className="inline-flex justify-center align-middle rounded w-full h-full shadow p-2 text-white"
            style={{ backgroundColor: "#40AFBD" }}
          >
            <span>Order our starterpack</span>
            <MdOutlineDeliveryDining className="fill-current w-6 h-6 ml-3" />
          </button>
          {isMessageSent === "success" && (
          <div className="mt-2">
            Thank you! We have received your message and will get back to you
            shortly &#10084;
          </div>
        )}
        {isMessageSent === "error" && (
          <div className="mt-2 text-red-600">
            We&apos;re really sorry! There was an error sending your message.
            Please try again later &#10084;
          </div>
        )}
        </div>
      </form>
    </div>
  );
}
