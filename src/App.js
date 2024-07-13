import React from "react";
import image from "./images/mum.jpg";

function App() {
  return (
    <div className="flex bg-orange-500 justify-center items-center min-h-screen">
      <div className="bg-orange-600 shadow-2xl rounded-lg p-7 max-w-3xl scale-50 hover:scale-100 transition duration-[2000ms]">
        <h1 className="text-3xl font-bold mb-4">Happy Birthday Mummy!</h1>
        <img
          className="mx-auto w-1/3 rounded-3xl mb-4 transition-w-full duration-300 hover:blur-0 blur-sm transition-blur duration-1000"
          src={image}
          alt="Birthday Cake"
        />

        <p className="text-lg">
          Happy Birthday, Mom! Wishing you a day as beautiful as you are and
          filled with love, laughter, and joy. You are the guiding light in my
          life, and I am grateful for your love and support every day. May this
          year bring you happiness, good health, and all the wonderful things
          you deserve.
          <br />
          <br />
          Thank you for being the best mom in the world. Happy Birthday, Mom!
          <p className="text-lg mt-4">
            From,
            <br />
            Sam Shervin
          </p>
        </p>
      </div>
    </div>
  );
}

export default App;
