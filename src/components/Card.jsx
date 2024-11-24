const Card = ({ title, children, icon }) => {
  return (
    <div className="bg-gray-400 bg-opacity-10 rounded-lg flex flex-col text-center max-w-[400px] card">
      <div className="card-border"></div>
      <div className="p-6 card-content space-y-4 text-sm justify-items-center">
        {icon}
        <h2 className="font-bold text-2xl">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
