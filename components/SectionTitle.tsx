import React from "react";

type SelectionProps = {
  title: string;
  description: string;
};

function SectionTitle({ title, description }: SelectionProps) {
  return (
    <div>
      <h2 className="md:text-h2 font-bold text-gray-900 text-xl capitalize md:text-2xl lg:leading-[48px] 4xl:leading-[48px] 4xl:text-3xl">
        {title}
      </h2>
      <p className="text-gray-500 text-sm md:text-base font-normal capitalize leading-6 4xl:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;
