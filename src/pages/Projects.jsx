import React from "react";
import { FaArrowRight } from "react-icons/fa";
import data from "../data.json";
import Contact from "./Contact";

const Projects = () => {
  return (
    <div className="relative flex justify-center py-5 " id="project">
      <div className="absolute z-0 w-full h-56 opacity-50 bottom-20 bg-neutral-800"></div>
      <div className="z-50 flex justify-center px-3 lg:w-1/2">
        <div className="w-full">
          <div className="flex items-center justify-between mb-5 ">
            <div>
              <h3 className="font-bold">FEATURED PROJECTS</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
            </div>
            <button
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View All
          </button>
          </div>
          <div className="mb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
              {data.works.map((work) => (
                <div key={work.id} >
                  <div className="  p-2 bg-[#1f1f1f]  lg:h-48 h-60  ">
                    <img src={work.image} alt="" className="w-full h-full" />
                  </div>
                  <div>
                    <p className="font-bold">{work.title}</p>
                    <a
                      href="#"
                      className="text-red-600 "
                    >
                      <span className="flex items-center text-xs ">
                        KNOW MORE <FaArrowRight className="ms-2" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Projects;
