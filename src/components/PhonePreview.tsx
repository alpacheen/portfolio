
import React from "react";

const PhonePreview = ({ src }: { src: string }) => {
  return (
    <>
    <div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] border-8 border-black shadow-lg overflow-hidden bg-primary">
      {/* Screenshot */}
      <img
        src={src}
        alt="Phone preview"
        className="absolute top-6 left-0 w-full h-[calc(100%-1.5rem)] object-cover"
      />
    </div>
    </>
  );
};

export default PhonePreview;

