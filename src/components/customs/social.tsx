import React from "react";

interface Props {
  icon: React.ReactNode;
  link: string;
}

const Social = ({ icon, link }: Props) => {
  return (
    <a href={link}>
      <div className="bg-zinc-800 h-10 w-10 rounded-full flex justify-center items-center text-white hover:bg-blue-500 transition-colors">
        {icon}
      </div>
    </a>
  );
};

export default Social;
