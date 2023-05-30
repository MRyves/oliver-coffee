/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    postmarkApiKey: "2dea42d2-444e-4c3d-adf0-808a37b23b36",
    emailFrom: "yves.hendseth@hispeed.ch",
    emailTo: "olivercoffee.switzerland@gmail.com",
  }
}

module.exports = nextConfig
