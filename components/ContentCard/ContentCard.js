import Image from "next/image";
import Link from "next/link";

const ContentCard = ({imgSrc, imgAlt, contentType, title, caption, link}) => {
  return (
    <div>
      <Link href={link}>
        <a>
          <div className="flex flex-col justify-end w-64 md:w-96 h-24 md:h-48 ">
            <Image className="rounded-t-2xl" src={imgSrc} alt={imgAlt}></Image>
          </div>
          <div className="flex flex-col justify-end w-64 md:w-96 h-48 bg-blue-50 rounded-b-2xl">
            <h3 className="text-base md:text-lg text-blue-500 px-5">
              {contentType}
            </h3>
            <h4 className="text-xl md: text-2xl font-semibold px-5">{title}</h4>
            <p className="text-base md:text-lg px-5">
              {caption.slice(0, 1000) + "......"}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ContentCard;
