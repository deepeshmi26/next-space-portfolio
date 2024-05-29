import React from "react";
import HeroContent from "../sub/HeroContent";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-380px] h-full w-full left-0  object-cover"
      >
        <source src="./blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
