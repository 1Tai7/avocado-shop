/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true, dot: true },
    src: { url: "/dist" },
  },
  buildOptions: {
    baseUrl: "/docs",
  },
};
