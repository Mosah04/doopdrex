import Image from "next/image";
import SimpleButton from "./SimpleButton";

const ServiceCard = ({ title, description, number, imgURL }) => {
  return (
    <div className="relative w-[400px] justify-items-center aspect-[4/3] rounded-xl border border-secondary/30 hover:border-tertiary/30 transition-colors duration-500 group">
      <Image
        width={400}
        height={0}
        alt={title}
        className="w-full h-full rounded-[inherit] object-cover"
        src={imgURL}
      />
      <div className="absolute rounded-b-[inherit] left-0 bottom-0 w-full bg-gradient-to-b from-transparent to-secondary group-hover:bg-secondary/50 transition-all duration-300 p-2">
        <span className="font-bold text-xl text-tertiary">{number}</span>
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 flex flex-col gap-2">
          <p className="text-sm">{description}</p>
          <SimpleButton>En savoir plus</SimpleButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
