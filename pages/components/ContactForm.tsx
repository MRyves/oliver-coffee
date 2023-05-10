import { BsEnvelopeHeart } from "react-icons/bs";

export default function ContactForm() {
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
            htmlFor="inp-message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your message
          </label>
          <textarea
            id="inp-message"
            className="block shadow appearance-none border rounded w-full text-gray-700 text-sm py-2 px-3"
            placeholder="Ask us anything!"
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
            <span>Send</span>
            <BsEnvelopeHeart className="fill-current w-6 h-6 ml-3" />
          </button>
        </div>
      </form>
    </div>
  );
}
