"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-[400px] lg:w-[500px] w-max-w-2xl mx-auto p-8 border rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="mb-6 ">
        <label htmlFor="name" className="block text-lg font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="dark:bg-slate-800 dark:text-white mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="dark:bg-slate-800 dark:text-white mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-lg font-medium">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          className="dark:bg-slate-800 dark:text-white mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject.message}</span>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-medium">
          Message:
        </label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          className="dark:bg-slate-800 dark:text-white mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-40"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
