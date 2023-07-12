import { FormEvent, useState } from "react";
import { useTranslation } from "next-i18next";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function OrderForm() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const { t } = useTranslation("order");

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNr, setPhoneNr] = useState("");
  const [message, setMessage] = useState("");
  const [isSignNewsletter, setIsSignNewsletter] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState<
    "success" | "error" | null
  >(null);

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
        {(t("texts", { returnObjects: true }) as string[]).map(
          (text, index) => (
            <p key={index}>{text}</p>
          )
        )}
      </div>
      <form onSubmit={submitHanlder} className="w-full md:px-8 pt-6 mb-4">
        <div className="mb-4">
          <label
            htmlFor="inp-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("form.name.label")}
          </label>
          <input
            id="inp-name"
            name="name"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder={t("form.name.placeholder")}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("form.email.label")}
          </label>
          <input
            id="inp-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder={t("form.email.placeholder")}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-phonenumber"
            className="inline-block text-gray-700 text-sm font-bold mb-2"
          >
            {t("form.phone.label")}
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
              {t("form.phone.tooltip.0")}
              <br />
              {t("form.phone.tooltip.1")}
            </div>
          </Tooltip>
          <input
            id="inp-phonenumber"
            name="phonenumber"
            value={phoneNr}
            onChange={(e) => setPhoneNr(e?.target?.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder={t("form.phone.placeholder")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("from.message.label")}
          </label>
          <textarea
            id="inp-message"
            value={message}
            onChange={(e) => setMessage(e?.target?.value)}
            className="block shadow appearance-none border rounded w-full text-gray-700 text-sm py-2 px-3"
            placeholder={t("form.message.placeholder")}
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
            {t("form.newsletter.label")}
          </label>
        </div>
        <div className="mb-4">
          <button
            className="inline-flex justify-center align-middle rounded w-full h-full shadow p-2 text-white"
            style={{ backgroundColor: "#40AFBD" }}
          >
            <span>{t("form.button")}</span>
            <MdOutlineDeliveryDining className="fill-current w-6 h-6 ml-3" />
          </button>
          {isMessageSent === "success" && (
            <div className="mt-2">
              {t("form.success")} &#10084;
            </div>
          )}
          {isMessageSent === "error" && (
            <div className="mt-2 text-red-600">
              {t("form.error")} &#10084;
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
