import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const resetFormErrorStates = () => {
    setNameError(false);
    setMessageError(false);
    setEmailError(false);
  };

  const isFormValid = () => {
    let isValid = true;
    resetFormErrorStates();

    if (form.name.trim() === '') {
      setNameError(true);
      isValid = false;
    }

    if (form.message.trim() === '') {
      setMessageError(true);
      isValid = false;
    }

    if (form.email.trim() === '' || !validateEmail(form.email)) {
      setEmailError(true);
      isValid = false;
    }

    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isFormValid()) {
      setError(true);
      setLoading(false);
      return;
    }

    setSuccess(false);
    setError(false);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andreas Pilgerstorfer",
          from_email: form.email,
          to_email: "ap.pilgerstorfer@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-2'
        >
          <label className='flex flex-col'>
            <span className={`text-white font-medium mb-4`}>Your Name*</span>
            <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Andreas Pilgerstorfer"
                className={`${!nameError ? 'border-none placeholder:text-secondary' : 'border border-red-500 text-red-500 placeholder-red-500'} 
                          bg-tertiary py-4 px-6  text-white rounded-lg outline-none 
                          font-medium`}            />
            <p className={`font-bold text-red-500 mt-2 ${!nameError ? 'invisible' : ''}`}>
              Please enter your name.
            </p>
          </label>
          <label className='flex flex-col'>
            <span className={`text-white font-medium mb-4`}>Your Email*</span>
            <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="email@mail.com"
                className={`${!emailError ? 'border-none placeholder:text-secondary' : 'border border-red-500 text-red-500 placeholder-red-500'} 
                          bg-tertiary py-4 px-6  text-white rounded-lg outline-none 
                          font-medium`}
            />
            <p className={`font-bold text-red-500 mt-2 ${!emailError ? 'invisible' : ''}`}>
              Please enter a valid email address.
            </p>
          </label>
          <label className='flex flex-col'>
            <span className={`text-white font-medium mb-4`}>Your Message*</span>
            <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='...'
                className={`${!messageError ? 'border-none placeholder:text-secondary' : 'border border-red-500 text-red-500 placeholder-red-500'} 
                          bg-tertiary py-4 px-6  text-white rounded-lg outline-none 
                          font-medium`}
            />
            <p className={`font-bold text-red-500 mt-2 ${!messageError ? 'invisible' : ''}`}>
              Please enter a message.
            </p>
          </label>

          <button
              type='submit'
              className='bg-tertiary border py-3 px-10 mt-2 rounded-xl outline-white w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <p className="font-bold mt-2">
            {success ? (
                "Thank you. I will get back to you as soon as possible."
            ) : error ? (
                "Unfortunately, something went wrong. Please try again."
            ) : null}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
