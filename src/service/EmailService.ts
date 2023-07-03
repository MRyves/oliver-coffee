const EmailService = {
  validateEmail: (email: string): boolean => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  },

  sendEmail: async (subject: string, htmlBody: string) => {
    const postMarkBody = {
      From: process.env.emailFrom,
      To: process.env.emailTo,
      Subject: `[OlivierCoffee] ${subject}`,
      TextBody: htmlBody,
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
    return {
      statusCode: response.status,
      statusMessage: resBody.Message || "No Message",
    };
  },
};

export default EmailService;
