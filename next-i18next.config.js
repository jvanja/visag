/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sr"],
  },
  debug: true,
  // ns: [ "common", "a", "b", "v", "g", "d", "dj", "e", "zz", "z", "i", "j", "k", "l", "lj", "m", "n", "nj", "o", "p", "r", "s", "t", "cj", "u", "f", "h", "c", "ch", "dz", "sh", ],
  localePath: "public/locales",
  // localePath:
  //   typeof window === "undefined"
  //     ? require("path").resolve("./public/locales")
  //     : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
