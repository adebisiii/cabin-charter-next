import React from "react";

interface InfoCardProps {
  icon: React.ReactNode; // Icon olarak herhangi bir JSX elementi alabilir
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-7 w-7 overflow-hidden flex items-center justify-center text-brown">{icon}</div>
      <div>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="block text-sm text-gray-600">{content}</span>
      </div>
    </div>
  );
};

export default InfoCard;
