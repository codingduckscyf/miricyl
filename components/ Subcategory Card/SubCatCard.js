import Link from "next/link";
const SubCatCard = ({ backgroundColor, title, category, link }) => {
  return (
    <div>
      <Link href={link}>
        <a>
          <div
            className={
              "w-64 md:w-96 h-24 md:h-48 m bg-" +
              backgroundColor +
              "-300 rounded-2xl flex flex-col justify-end text-white"
            }
          >
            <h3 className="  text-base md:text-2xl block text-white">
              {category}
            </h3>
            <h4 className="text-2xl md:text-4xl font-bold text-white pb-10">
              {title}
            </h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SubCatCard;
