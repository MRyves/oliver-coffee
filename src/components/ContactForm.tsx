import { Message } from "postcss";
import { FormEvent, useState } from "react";
import { BsEnvelopeHeart } from "react-icons/bs";

type MessageSentState = null | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [signNewsletter, setSignNewsLetter] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState<MessageSentState>(null);

  const handleMessageSent = (successful: boolean) => {
    if (successful) {
      setIsMessageSent("success");
      setName("");
      setEmail("");
      setMessage("");
      setSignNewsLetter(true);
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
      signNewsletter,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => handleMessageSent(res.ok));
  };

  return (
    <div className="flex justify-center p-2 mx-auto md:w-1/3">
      <form onSubmit={submitHanlder} className="w-full px-8 pt-6 pb-8 mb-4">
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
            type="text"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500"
            placeholder="e.g. yhendseth@gmail.com"
            required
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
            value={message}
            onChange={(e) => setMessage(e?.target?.value)}
            className="block shadow appearance-none border rounded w-full text-gray-700 text-sm py-2 px-3"
            placeholder="Ask us anything!"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            id="checkbox-newsletter"
            type="checkbox"
            checked={signNewsletter}
            onChange={() => setSignNewsLetter(!signNewsletter)}
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
            type="submit"
            className="inline-flex justify-center align-middle rounded w-full h-full shadow p-2 text-white bg-default-cyan-normal"
          >
            <span>Send</span>
            <BsEnvelopeHeart className="fill-current w-6 h-6 ml-3" />
          </button>
        </div>
        {isMessageSent === "success" && (
          <div>
            Thank you! We have received your message and will get back to you
            shortly &#10084;
          </div>
        )}
        {isMessageSent === "error" && (
          <div className="text-red-600">
            We&apos;re really sorry! There was an error sending your message.
            Please try again later &#10084;
          </div>
        )}
      </form>
    </div>
  );
}
