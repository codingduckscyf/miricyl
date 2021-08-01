import Image from "next/image";
import Link from "next/link";

const ContentCard = ({ imgSrc, imgAlt, contentType, title, caption, link }) => {
  return (
    <div className="mx-auto my-8">
      <Link href={link}>
        <a>
          <div className="flex flex-col justify-end w-64 md:w-96 h-24 md:h-56">
            <Image
              className="rounded-t-2xl w-full object-cover md:w-full"
              src={imgSrc}
              alt={imgAlt}
              // layout="fill"
              width="300"
              height="300"
            ></Image>
          </div>
          <div className="flex flex-col justify-start w-64 md:w-96 h-24 md:h-60 shadow rounded-b-2xl p-6">
            <h3 className="text-base md:text-lg text-blue-500 px-5">
              {contentType}
            </h3>
            <h4 className="text-xl md:text-2xl py-2 font-semibold px-5 capitalize">
              {title}
            </h4>
            <p className="text-base md:text-lg px-5 overflow-clip overflow-hidden">
              {caption}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContentCard;
