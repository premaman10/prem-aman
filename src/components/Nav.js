import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/*nav inner*/}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[600px] mx-auto px-8 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="certifications"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <FaTrophy />
          </Link>
          <Link
            to="projects"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="education"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <FaGraduationCap />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
