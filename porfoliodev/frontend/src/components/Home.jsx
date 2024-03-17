import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import developerHeader from "../assets/developer.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <img
        alt="developer"
        src={developerHeader}
        className="w-[370px] h-[550px]md:h-40 min-[600px] absolute left-[60%] top-[20px] md:left-[5%] md:static"
      />

      <div className="absolute md:text-[30px] xl:left-[-10px] xl:text-[30px]  md:left-[10] md:w-screen p-6  md:static left-[20%] top-[10%] w-[619px] h-[250px] text-black text-[64px] font-normal">
        <p>Hi! I'm Viviana Sánchez, I'm Full Stack developer</p>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faMapMarker} className="text-slate-500 mr-2" />
          <span className="text-black text-[30px]">Madrid, España</span>
        </div>
        <Link
          className="cursor-pointer text-[20px]  text-white bg-slate-500 mt-2 p-4"
          to="Projects"
          smooth="500"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Home;
