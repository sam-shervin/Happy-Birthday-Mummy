import React from "react";
import image from "./images/mum.jpg";

function App() {
  return (
    <div className="flex bg-green-200 justify-center items-center min-h-screen bg-gray-300">
      <div className="bg-orange-500 shadow-lg rounded-lg p-7 max-w-md">
        <h1 className="text-3xl font-bold mb-4">Happy Birthday Mummy!</h1>
        <img
          className="mx-auto w-1/2 rounded-full mb-4 hover:w-full hover:h-full transition-w-full duration-300 hover:blur-0 blur-sm transition-blur duration-300"
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
