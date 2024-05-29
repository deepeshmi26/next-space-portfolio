import React from "react";
import Image from "next/image";
type Props = {
  src: string;
  title: string;
  description: string;
};

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={src}
        alt="title"
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="text-white flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xs font-extralight ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
