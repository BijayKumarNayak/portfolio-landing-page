import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="relative top-0 flex flex-col items-center w-full h-full overflow-hidden md:flex-row lg:px-10 ">
        <div className="relative z-0 flex justify-center w-full lg:w-1/2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 700 700"
            width="700"
            height="700"
            className="absolute overflow-hidden "
          >
            <defs></defs>
            <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1">
              <path
                transform="matrix(1 0 0 1 350 350)"
                id="two-2"
                d="M 191.632324 56.268327 C 190.70323 75.526415 157.785436 78.499959 147.978267 95.099857 C 137.658156 112.567974 151.149142 143.67019 134.354054 155.052844 C 115.421345 167.884242 88.351641 148.587291 65.889916 144.278791 C 50.381766 141.304092 33.587008 127.139533 19.223023 133.699067 C -14.247639 148.983957 1.255297 219.545358 -33.35992 232.023334 C -53.878927 239.419956 -81.353615 224.399931 -94.548474 207.032278 C -111.889886 184.20675 -91.374915 146.168874 -104.63357 120.753576 C -111.770866 107.072212 -130.346188 102.061963 -139.619451 89.727972 C -149.009724 77.238349 -149.721227 58.771845 -159.961207 46.968847 C -178.338242 25.786764 -209.274427 17.998295 -230.779251 0 C -263.748923 -27.593711 -335.645589 -53.847598 -320.787155 -94.191608 C -303.565332 -140.952755 -200.208132 -69.558786 -170.572327 -109.620178 C -147.985232 -140.153193 -223.157931 -199.676073 -192.829333 -222.536913 C -157.571864 -249.112998 -114.857377 -145.374817 -73.761866 -161.515956 C -41.203513 -174.303943 -69.513651 -246.936547 -37.545718 -261.136202 C -14.449437 -271.395208 8.228383 -230.036744 33.399306 -232.297283 C 73.22627 -235.874045 103.092188 -320.307393 135.726196 -297.198915 C 188.672618 -259.707006 43.942058 -149.72632 91.53309 -105.634818 C 127.510633 -72.302826 194.514552 -179.897284 233.382312 -149.985706 C 254.985896 -133.360172 242.489305 -91.556269 229.744039 -67.458937 C 212.358721 -34.588713 142.85854 -37.031554 139.48735 -0.000001 C 137.192182 25.211762 192.85226 30.981719 191.632324 56.268327 Z "
                fill="hsl(335, 77%, 50%)"
                stroke="undefined"
                strokeWidth="1"
                strokeOpacity="1"
                fillOpacity="1"
                visibility="visible"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
              ></path>
            </g>
          </svg>
          <img
            src="/images/avatar.png"
            alt=""
            className="relative z-10 h-96"
          />
        </div>
        <div className="z-10 w-full p-4 bg-black lg:w-1/2 lg:p-0 ">
          <p className="mb-2 text-2xl font-bold text-rose-600 font-EduQLDBeginner">
            Hello Im ELSA
          </p>
          <h1 className="mb-2 text-3xl font-extrabold lg:text-5xl ">
            Visual Designer
          </h1>
          <p className="mb-3 font-paraFont lg:mr-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nulla eos, facere quas ad deleniti dolorem officiis amet doloremque
            quo!
          </p>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
