"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Add your form submission logic here
    },
  });
  return (
    <>
      <div className="flex flex-wrap items-center md:mt-[10rem] mb-24 ">
        <div className="w-full md:w-1/2 p-4">
          <img src="/contact.gif" alt="Portfolio Image"className="h-full w-full object-cover"/>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
            <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input type="text"id="name"name="name"placeholder="Your name"className={`border ${
                  formik.errors.name && formik.touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2 w-full`}
                {...formik.getFieldProps("name")}/>
               {formik.errors.name && formik.touched.name && (<div className="text-red-500 mt-1">{formik.errors.name}</div>)}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email"id="email"name="email"placeholder="Your email"className={`border ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2 w-full`}
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email && (<div className="text-red-500 mt-1">{formik.errors.email}</div>)}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message"name="message"placeholder="Your message"className={`border ${
                  formik.errors.message && formik.touched.message
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded px-3 py-2 w-full h-32 resize-none`}
                {...formik.getFieldProps("message")}
              ></textarea>{formik.errors.message && formik.touched.message && (<div className="text-red-500 mt-1">{formik.errors.message}</div>)}
            </div>
            <button type="submit"className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 outline-none">Send</button>
        

          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
