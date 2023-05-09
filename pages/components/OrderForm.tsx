import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function OrderForm() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <div className="flex justify-center p-2 mx-auto md:w-1/3">
      <form action="" className="w-full px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="inp-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Name
          </label>
          <input
            id="inp-name"
            name="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder="e.g. Yves Hendseth"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="inp-email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Email*
          </label>
          <input
            id="inp-email"
            name="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder="e.g. yhendseth@gmail.com"
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
          <Tooltip anchorSelect="#phone-number-info" isOpen={isTooltipOpen} closeOnEsc>
            <div className="max-w-xs">
              We like to keep things simple and therefor you have the option to
              give your mobile phone number to hear from us via WhatsApp or SMS.
              <br />
              Don't worry, we will not give your data to anyone!
            </div>
          </Tooltip>
          <div
            id="phone-number-info"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm"
          >
            The tooltip :)
          </div>
          <input
            id="inp-phonenumber"
            name="phonenumber"
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
            className="block shadow appearance-none border rounded w-full text-gray-700 text-sm py-2 px-3"
            placeholder="Tell us how you found our page and add your address for faster delivery..."
            rows={5}
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            id="checkbox-newsletter"
            type="checkbox"
            className="inline-block border rounded text-sm border-gray-700"
            defaultChecked
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
        </div>
      </form>
    </div>
  );
}
