import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          Viva Translate helps people from all over the world to communicate in
          English, Spanish and Portuguese in real time. Save time on meeting
          notes and translations with Viva.
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Visit US</h1>
            <p>California , Miami , USA</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Mail US</h1>
            <p>contact-support@viva.com</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Call US</h1>
            <p>1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
