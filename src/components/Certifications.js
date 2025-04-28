import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Certifications = () => {
  const certifications = [
    {
     
      title: "Data Structures & Algorithms",
      issuer: "Coursera",
      date: "2023",
      image: "../dsa.png",
      description: "Advanced Data Structures and Algorithms Certification",
      link: "../dsa.png"
    },
    {
      title: "Software Testing",
      issuer: "NPTEL",
      date: "2023",
      image: "../software.png",
      description: "Certified in Software Testing (IIT MADRAS)",
      link: "../fullstack.png"
    },
    {
      title: "Android Development",
      issuer: "Fifth Force",
      date: "2023",
      image: "../android.png",
      description: "Android App Development Fundamentals",
      link: "../android.png"
    },
    {
      title: "Computer Networking",
      issuer: "Coursera",
      date: "2023",
      image: "../network.png",
      description: "The Bits and Bytes of Computer Networking",
      link: "../dsa.png"
    },
    {
      title: "Genrative AI",
      issuer: "Coursera",
      date: "2023",
      image: "../genai.png",
      description: "Introduction to GenAI",
      link: "../aws.png"
    },
    {
      title: "Communication Skills",
      issuer: "Coursera",
      date: "2023",
      image: "../certicommuni.png",
      description: "Communication Strategies for a Virtual Age",
      link: "../aws.png"
    }
  ];

  return (
    <section id="certifications" className="w-full min-h-screen bg-site bg-no-repeat bg-cover overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications And Certificates</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.1 }}
              className="w-[330px] bg-card cursor-pointer rounded-[10px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden p-[26px_20px] flex flex-col gap-[14px] h-[500px] min-h-[500px] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110 mx-auto"
            >
              <div className="flex flex-col items-center">
                <div className="w-full h-[180px] bg-transparent rounded-[10px] mb-6 flex items-center justify-center cursor-pointer overflow-hidden">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </a>
                </div>
                <div className="text-center w-full">
                  <h3 className="text-[20px] font-semibold mb-2 text-text_secondary">{cert.title}</h3>
                  <p className="text-text_secondary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-text_secondary/80 mb-4">{cert.description}</p>
                  <p className="text-sm text-text_secondary/80 font-medium">Issued: {cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 