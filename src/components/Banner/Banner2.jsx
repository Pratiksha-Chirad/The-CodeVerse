import React from "react";
import BannerPng from "../../assets/education7.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
            At CodeVerse, we offer expert-led courses, hands-on projects, and industry-recognized certifications to help you master coding, AI, and machine learning. Learn at your own pace with a cutting-edge curriculum designed for real-world success. Join a thriving community and unlock limitless opportunities in tech. Start your journey today! 
            </p>
            <a
              href="#"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[500px] md:max-w-[500px] object-contain drop-shadow"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
