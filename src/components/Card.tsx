"use client";
interface CommunityCardsProps {
  images: string;
  title: string;
  description: string;
  color: string
}

const Card: React.FC<CommunityCardsProps> = ({
  images,
  title,
  description,
  color
}) => {
  return (
    <div className={`max-w-sm rounded dark:shadow-xl dark:hover:shadow-gray-500  overflow-hidden shadow-lg hover:shadow-2xl border-b-5 border-b-orange-400  my-8`}>
      <div className="flex justify-center items-center h-[150px]">
        <div className="h-[60px]">
          <img className="h-[30px]" src={images} alt="Placeholder" />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-center">
          {title}
        </div>
        <p className="dark:text-white text-base opacity-70 flex justify-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
