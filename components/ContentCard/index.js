import Image from "next/image";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { useContext } from "react";
import { UserContext } from "~/pages/_app";

const ContentCard = ({
  imgSrc,
  imgAlt,
  contentType,
  title,
  caption,
  link,
  heartIconClickHandler,
  isLiked,
  editUrl,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="mx-auto my-8 relative">
      <Link href={link}>
        <a>
          <div className="flex flex-col justify-end w-80 md:w-96 h-52 md:h-56">
            <Image
              className="rounded-t-2xl w-full object-cover md:w-full"
              src={imgSrc}
              alt={imgAlt}
              // layout="fill"
              width="300"
              height="300"
            ></Image>
          </div>
          <div className="flex flex-col justify-start w-80 md:w-96 h-52 md:h-60 shadow rounded-b-2xl p-6">
            <h3 className="text-base md:text-lg text-blue-500 px-5">
              {contentType}
            </h3>
            <h4 className="text-xl md:text-2xl py-2 font-semibold px-5 capitalize">
              {title}
            </h4>
            <p className="text-gray-600 text-sm md:text-lg px-5 line-clamp-3 overflow-hidden">
              {caption}
            </p>
          </div>
        </a>
      </Link>
      <div className="flex justify-end absolute bottom-5 right-3">
        <MdFavorite
          className={`${
            isLiked ? "text-red-500" : "text-gray-300"
          } text-3xl cursor-pointer`}
          onClick={heartIconClickHandler}
        />
      </div>
      {user.isAdmin && (
        <Link href={editUrl}>
          <a>
            <div className="flex justify-end absolute bottom-5 left-3">
              <GrEdit className="text-2xl cursor-pointer" />
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default ContentCard;
