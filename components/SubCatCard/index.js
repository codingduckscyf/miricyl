import Link from "next/link";
const SubCatCard = ({
  backgroundColor1,
  backgroundColor2,
  title,
  category,
  link,
}) => {
  return (
    <div className="mb-8 mx-4">
      <Link href={link}>
        <a>
          <div
            className={`w-64 md:w-96 h-32 md:h-48 bg-gradient-to-r from-${backgroundColor1}-700 to-${backgroundColor2}-900 rounded-2xl flex flex-col justify-end  text-gray-200 `}
          >
            <h3 className="text-base md:text-2xl block px-4 capitalize">
              {category}
            </h3>
            <h4 className="text-xl md:text-3xl font-bold px-4 pb-10">
              {title}
            </h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SubCatCard;
