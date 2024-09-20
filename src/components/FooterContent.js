import React from "react";

const Section1 = () => {
  return (
    <div className="flex shrink-0 gap-20 py-40">
      <h1 className="text-[5vw] leading-[0.8] mt-10">Call Us</h1>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="">
      <h1 className="text-[14px] leading-[0.8] py-4">Follow us.</h1>
      <div className="flex gap-3 items-end">
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">CURADO.</h1>
      <p>©copyright2024</p>
    </div>
  );
};

export default function FooterContent() {
  return (
    <div className="bg-[#000] py-8 px-12 h-full w-full flex flex-col justify-end">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
