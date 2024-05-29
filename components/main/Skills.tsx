"use client";
import React from "react";
import SkillText from "../sub/SkillText";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="text-white h-full w-full flex flex-col justify-center items-center">
      <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>

      <SkillText />
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 items-center justify-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              index={index}
              width={image.height}
              height={image.width}
              src={image.Image}
            />
          ))}
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              index={index}
              width={image.height}
              height={image.width}
              src={image.Image}
            />
          ))}
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              index={index}
              width={image.height}
              height={image.width}
              src={image.Image}
            />
          ))}
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              index={index}
              width={image.height}
              height={image.width}
              src={image.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
