import React from "react";
import zoom from "../assets/portfolio/zoom.jpg";
import disney from "../assets/portfolio/disney.PNG";
import weather from "../assets/portfolio/weather.png";
import work from "../assets/portfolio/work.png";
import whatsapp from "../assets/portfolio/whatsapp.png"
import crowdFund from "../assets/portfolio/crowdFund.PNG"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: whatsapp,
      title: "Whatsapp Clone",
      href: "https://github.com/S4JN/WhatsappWebClone"
    },
    {
      id: 2,
      src: crowdFund,
      title: "Crowd Fund",
      href: "https://github.com/S4JN/fund-raising-eth"
    },
    {
      id: 3,
      src: weather,
      title: "WeatherUP",
      href: "https://github.com/S4JN/mausam",
    },
    {
      id: 4,
      src: disney,
      title: "Disney2.0",
      href: "https://github.com/S4JN/Disney-Plus-clone",
    },
    {
      id: 5,
      src: zoom,
      title: "Zoom2.0",
      href: "https://github.com/S4JN/Zoom2.0"
    },
    {
      id: 6,
      src: work,
      title: "WorkIt",
      href: "https://github.com/S4JN/kaambatao",
    },

  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen por"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className=" truncate pb-2 text-center">
                <p className=" truncate mt-4 pb-2 text-[18px] font-epilogue">{title}</p>
                <hr className="opacity-[0.15] mx-8 pb-2 mb-" />
                <a href={href} target="_blank" className=" text-[12px] text-[#808191] duration-500 hover:text-[14px] hover:scale-15 hover:text-[#fff] truncate">{href.slice(8)}</a>

                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
