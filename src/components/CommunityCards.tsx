import React from "react";
import Image from "next/image";

interface CommunityCardsProps {
  socialMedia: string;
  socialMediaImage: string;
}

const CommunityCards: React.FC<CommunityCardsProps> = ({
  socialMedia,
  socialMediaImage,
}) => {
  return (
    <div className="rounded max-w-xs overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-2xl dark:shadow-gray-500 dark:hover:shadow-gray-500 p-2">
  <img className="w-full object-cover h-1/2" src={socialMediaImage} alt="Sunset in the mountains"/>
  <div className="px-6 py-4 h-1/2">
    <div className="font-bold text-xl mb-2 uppercase">{socialMedia}</div>
    <p className="text-gray-700 dark:text-gray-200 text-base">
     Community
    </p>
  </div>
</div>
  );
};

export default CommunityCards;
