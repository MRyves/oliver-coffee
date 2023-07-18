/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    defaultLocale: "de-CH",
    locales: ["en", "de-CH"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
};
