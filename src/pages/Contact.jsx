import React, { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1f1f1f] flex lg:flex-row flex-col items-center lg:p-5 p-2   m-auto text-center gap-3 lg:gap-0  ">
      <div className=" lg:w-2/3 text-start">
        <h3 className="mb-3 text-2xl font-bold lg:mr-8">
          Let's work together on your next project
        </h3>
        <p className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          velit.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Contact Us
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-50">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-black">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 transform transition-transform duration-200 focus:translate-y-0.5 bg-gradient-to-b from-gray-100 to-gray-300"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 transform transition-transform duration-200 focus:translate-y-0.5 bg-gradient-to-b from-gray-100 to-gray-300"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-400">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 transform transition-transform duration-200 focus:translate-y-0.5 bg-gradient-to-b from-gray-100 to-gray-300"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-800 transform bg-gray-300 rounded-lg shadow-lg active:translate-y-1 active:shadow-inner hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white transform bg-blue-500 rounded-lg shadow-lg active:translate-y-1 active:shadow-inner hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
