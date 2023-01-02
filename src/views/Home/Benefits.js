import React from "react";

function Benefits() {
  const strategies = [
    {
      title: "MEETINGS",
      description: "Talk to your team members without any restrictions",
      image: "images/content-marketing.png",
    },
    {
      title: "TRANSLATION",
      description:
        "Read the translation and accurately understand what is discussed in the meetings",
      image: "images/inbound-marketing.png",
    },
    {
      title: "MAGIC",
      description:
        "Feel confident in multilingual meetings with real-time transcriptions and translations.",
      image: "images/social-media.png",
    },
    {
      title: "ENJOY",
      description:
        "With AI-translated captions, everyone will be on the same page during calls.",
      image: "images/seo.png",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary sm:mt-10">
        Do you want to communicate with your entire team regardless of their
        language?
      </h1>
      <h1 className="text-7xl font-semibold text-primary mt-10 sm:text-5xl">
        The <b className="text-secondary">SOLUTION</b> is here..
      </h1>
      <p className="text-gray-600 text-xl mt-10">
        Curious about how to communicate with the rest of your team who may not
        speak your language or be very difficult to communicate with? Well VIVA
        brings you the solution to your problems. Here’s what we offer, in no
        particular order:
      </p>

      <div className="grid grid-cols-2 gap-20 mt-10 sm:grid-cols-1">
        {strategies.map((item, key) => {
          return (
            <div
              key={key}
              className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300"
            >
              <h1 className="mx-20 sm:mx-5 text-center -mt-8 bg-white border-primary border text-2xl rounded text-secondary py-2">
                {item.title}
              </h1>
              <img src={item.image} alt="" className="h-24 w-24" />
              <p className="text-gray-600 text-md hover:text-primary">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
