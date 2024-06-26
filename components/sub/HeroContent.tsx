"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
type Props = {};

const HeroContent = (props: Props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="Welcome-box flex flex-row py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9] rounded-full"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] ">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl text-white font-bold max-w-[600px] w-auto h-auto"
          >
            <span className="flex flex-col">
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile and Software development. Check out my projects and skills
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>
        <div>
          <Image
            src="/mainIconsdark.svg"
            alt="skills"
            height={650}
            width={650}
          />
        </div>
      </motion.div>
    </>
  );
};

export default HeroContent;
