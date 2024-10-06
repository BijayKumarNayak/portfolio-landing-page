import React, { useState } from "react";
import { MdDesignServices } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { TbBrandAdobe } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import data from "../data.json";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const iconMap = {
    MdDesignServices: MdDesignServices,
    AiOutlineProduct: AiOutlineProduct,
    TbBrandAdobe: TbBrandAdobe,
  };
  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = (id) => {
    setHoveredCard(null);
  };
  return (
    <div className="relative flex justify-center p-5 overflow-hidden" id="about">
      <div className="absolute top-0 left-0 z-0 w-2/3 h-full opacity-50 lg:w-1/2 bg-neutral-800"></div>
      <div className="z-50 flex justify-center w-full p-2 lg:w-1/2 ">
        <div >
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 mb-5 lg:gap-4">
            {data.skills.map((item) => {
              const IconComponent = iconMap[item.icon];
              const isHovered = hoveredCard === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                  className={`w-48  text-white p-3 ${
                    isHovered
                      ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600"
                      : " bg-[#1f1f1f]"
                  } `}
                >
                  <div className="mb-2">
                    <IconComponent
                      className={`text-2xl ${
                        isHovered ? "text-white" : "text-red-600"
                      }   `}
                    />
                  </div>

                  <p className="mb-2 font-bold">{item.title}</p>
                  <p className="mb-2 text-sm font-paraFont">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className={`${isHovered ? "text-white" : "text-red-600"}`}
                  >
                    <span className="flex items-center text-xs tracking-wide">
                      KNOW MORE <FaArrowRight className="ms-2" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="w-48 p-3 text-center">
              <h1 className="text-4xl font-bold text-red-600">12</h1>
              <p className="font-semibold">Years Experience</p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-48 bg-[#1f1f1f] p-2 text-center">
                  <p className="text-2xl font-bold text-red-600">60+</p>
                  <p>Courses</p>
                </div>
                <div className="w-48 bg-[#1f1f1f] p-2 text-center">
                  <p className="text-2xl font-bold text-red-600">08</p>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="w-48 bg-[#1f1f1f] p-2 text-center">
                  <p className="text-2xl font-bold text-red-600">120+</p>
                  <p>Complete Projects</p>
                </div>
                <div className="w-48 bg-[#1f1f1f] p-2 text-center">
                  <p className="text-2xl font-bold text-red-600">50+</p>
                  <p>Acchivements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
