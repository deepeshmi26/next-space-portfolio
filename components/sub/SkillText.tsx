import { SparklesIcon } from "@heroicons/react/16/solid";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromBottom } from "@/utils/motion";

type Props = {};

const SkillText = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-7 items-center justify-start"
      >
        <div className="Welcome-box px-2 py-2 flex flex-row gap-2 border border-[#7042f88b]">
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Think better with Next js 13
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromBottom(0.5)}
        className="flex flex-col gap-7 items-center justify-start"
      >
        <div className="text-4xl">Making app with modern technologies</div>
        <div className="cursive text-xl text-gray-200">
          Never miss a task, deadline or idea
        </div>
      </motion.div>
    </div>
  );
};

export default SkillText;
