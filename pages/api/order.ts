import EmailService from "@/src/service/EmailService";
import type { NextApiRequest, NextApiResponse } from "next";

function isEmptyOrUndefined(input: string): boolean {
  return !input || input === "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === "POST") {
    const { name, email, phoneNr, message, isSignNewsletter, inspector } = req.body;

    if (inspector) {
      return res.status(400).send("Message not sent");
    }

    if (
      isEmptyOrUndefined(name) ||
      isEmptyOrUndefined(email) ||
      !EmailService.validateEmail(email) ||
      isEmptyOrUndefined(message)
    ) {
      console.log({ name, email, message });
      return res.status(400).send("Message not sent");
    }

    const { statusCode, statusMessage } = await EmailService.sendEmail(
      "Order request",
      `name: ${name}\nemail: ${email.replace(
        "@",
        "(at)"
      )}\nphoneNr:${phoneNr}\nnewsletter: ${isSignNewsletter}\nmessage: ${message}`
    );

    return res.status(statusCode).send(statusMessage);
  }

  return res.status(405).send("Method not supported");
}
