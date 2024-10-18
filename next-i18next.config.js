/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: "sr",
    locales: ["en", "sr"],
  },
  debug: true,
  // ns: [ "common", "a", "b", "v", "g", "d", "dj", "e", "zz", "z", "i", "j", "k", "l", "lj", "m", "n", "nj", "o", "p", "r", "s", "t", "cj", "u", "f", "h", "c", "ch", "dz", "sh", ],
  localePath: "public/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
