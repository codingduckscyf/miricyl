const HeaderContent = ({ title, caption }) => {
    return (
      <div>
        <h2 className="py-7 font-bold text-4xl md:text-8xl">{title}</h2>
        <p className="text-xl md:text-2xl text-gray-500">{caption}</p>
      </div>
    );
};

export default HeaderContent;
