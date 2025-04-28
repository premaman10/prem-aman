import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Import SweetAlert2

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation logic to prevent empty submissions
    const name = form.current["from_name"].value;
    const email = form.current["email_id"].value;
    const message = form.current["message"].value;

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill in all fields before sending the message.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      return; // Prevent the form submission if any field is empty
    }

    // If validation passes, send the email
    emailjs
      .sendForm(
        "service_hpeo995", // Your EmailJS service ID
        "template_7m5y4t9", // Your EmailJS template ID
        form.current,
        "jP8qWyHs00mD_Ra2x" // Your EmailJS public key
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
          });
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/*form*/}
          <motion.form
            ref={form} // Attach form ref to the form element
            onSubmit={sendEmail} // Add onSubmit handler
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="from_name" // Add name attribute required by EmailJS
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email_id" // Add name attribute required by EmailJS
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message" // Add name attribute required by EmailJS
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
