import type { NextApiRequest, NextApiResponse } from "next";

function validateEmail(email: string): boolean {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

function isEmptyOrUndefined(input: string): boolean {
  return !input || input === "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === "POST") {
    const { name, email, message, signNewsletter, inspector } = req.body;

    if (inspector) {
      return res.status(400).send("Message not sent");
    }

    if (
      isEmptyOrUndefined(name) ||
      isEmptyOrUndefined(email) ||
      !validateEmail(email) ||
      isEmptyOrUndefined(message)
    ) {
      console.log({name, email, message});
      return res.status(400).send("Message not sent");
    }

    const postMarkBody = {
      From: process.env.emailFrom,
      To: process.env.emailTo,
      Subject: "[OliverCoffee] Contact request",
      HtmlBody: `
      <p>name: ${name}</p>
      <p>email: ${email}</p>
      <p>newsletter: ${signNewsletter}</p>
      <p>message: ${message}</p>
      `,
    };

    const headers = new Headers();
    headers.append("X-Postmark-Server-Token", `${process.env.postmarkApiKey}`);
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");


    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers,
      body: JSON.stringify(postMarkBody),
    });
    const resBody = await response.json();
    return res.status(response.status).send(resBody["Message"] || "No message");
  }

  return res.status(405).send("Method not supported");
}
