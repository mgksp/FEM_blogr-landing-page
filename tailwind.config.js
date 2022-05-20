module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        ltRed: "hsl(356, 100%, 66%)",
        ltrRed: "hsl(355, 100%, 74%)",
        dkrBlue: "hsl(208, 49%, 24%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        dkrGrayishBlue: "hsl(207, 13%, 34%)",
        dkrBlackBlue: "hsl(240, 10%, 16%)",

        introGradient: {
          from: "hsl(13, 100%, 72%)",
          to: "hsl(353, 100%, 62%)",
        },

        bodyGradient: {
          from: "hsl(237, 17%, 21%)",
          to: "hsl(237, 23%, 32%)",
        },
      },
    },
  },
  plugins: [],
};
