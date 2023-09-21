/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes:{
        wiggle:{
        "0% ,10%":{transform :"translateY(-20px)"},
        "20%":{transform :" rotate(-7deg) translateY(-10px)"},
        "30%":{transform :" rotate(7deg) translateY(-10px)"},
        "40%":{transform :" rotate(-7deg) translateY(-10px)"},
        "50%":{transform :" rotate(7deg) translateY(-10px)"},
        "60%":{transform :" rotate(-7deg) translateY(-10px)"},
        "70%":{transform :" rotate(7deg) translateY(-10px)"},
        "80%":{transform :" rotate(0deg) translateY(-10px)"},
        "90%,100%":{transform :" translateY(0px)"},
      },
    },
    animation:{
      wiggle:"wiggle 0.8s linear",
    }
    },
  },
  plugins: [],
}

