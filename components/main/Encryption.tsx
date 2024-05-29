import React from "react";

type Props = {};

const Encryption = (props: Props) => {
  return (
    <div className="h-full text-white w-full flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        className="w-full h-auto"
        src="./encryption.webm"
      />
    </div>
  );
};

export default Encryption;
