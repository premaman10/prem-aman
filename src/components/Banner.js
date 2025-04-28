import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-9">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[85px]"
            >
              Prem <span>Aman </span>
            </motion.h1>
            <motion.div
  variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.7 }}
  className="mb-6 lg:text-[45px] text-[24px] font-secondary font-semibold uppercase leading-[1] space-y-2"
>
   <div>
    <span className="text-white mr-4">I am a</span>
    <TypeAnimation
      sequence={[
        "Java Programmer",
        2000,
        "Full Stack Developer",
        2000,
      ]}
      speed={80}
      className="text-accent"
      wrapper="span"
      repeat={Infinity}
    />
  </div>
  <div>
    <span className="text-white mr-4">I am an</span>
    <TypeAnimation
  sequence={[
    "Android Developer",
    2000,
    " ",
    100,
  ]}
  speed={80}
  className="text-accent"
  wrapper="span"
  repeat={Infinity}
/>

  </div>
  
 
</motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Currently immersed in the exciting world of Computer Science and
              Engineering. My journey is fueled by a genuine love for technology
              and an eagerness to overcome challenges.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                className="btn btn-lg"
                style={{ display: "inline-flex", alignItems: "center" }}
                onClick={() => window.open("../CV.pdf", "_blank")} // Open PDF in a new tab
              >
                Download CV
                <FiDownload style={{ marginLeft: "5px" }} />{" "}
                {/* Add margin for spacing */}
              </button>
            </motion.div>
            {/*socials*/}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/prem-aman/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/premaman10" target="blank">
                <FaGithub />
              </a>
              <a href="https://x.com/PremAman17" target="blank">
                <FaTwitter />
              </a>
              <a
                href="https://leetcode.com/u/premaman14/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode /> {/* LeetCode icon */}
              </a>
            </motion.div>
          </div>
          {/*text*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
          >
            <img
          src="../avtar.png"
          alt="Avatar"
          className="rounded-full border-4 border-accent shadow-lg"
        />
        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
