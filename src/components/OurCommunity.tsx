"use client";
import CommunityCards from "./CommunityCards";
const OurCommunity = () => {
  return (
    <div className="flex flex-col pt-14 w-screen items-center gap-10">
      <div className="sm:text-6xl text-3xl font-semibold">
        Our <span className="text-blue-500">Community</span>
      </div>
      <div className="w-screen flex flex-wrap gap-y-6 gap-x-4 justify-center">
        <CommunityCards
          socialMedia="Discord"
          socialMediaImage="/images/discord.jpeg"
        />
        <CommunityCards
          socialMedia="linkedin"
          socialMediaImage="/images/linkedin.jpg"
        />
        <CommunityCards
          socialMedia="Instagram"
          socialMediaImage="/images/instagram.png"
        />
        <CommunityCards
          socialMedia="Whatsapp"
          socialMediaImage="/images/whatsapp.png"
        />
      </div>
    </div>
  );
};

export default OurCommunity;
