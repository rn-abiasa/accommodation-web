import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-50">
        <div className="bg-blue-500 h-10 w-10 rounded-lg flex justify-center items-center text-white">
          {icon}
        </div>
        <div className="mt-5">
          <h3 className="text-base font-semibold text-center">{title}</h3>
          <p className="text-sm font-normal text-black/70 text-center">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
