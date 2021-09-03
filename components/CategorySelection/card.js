import Link from "next/link";
import Image from "next/image";

const Card = ({ url, title, id, link }) => {
  return (
    <div className="w-full md:p-5 py-5 md:w-1/3 md:my-20 capitalize">
      {/* TODO: Page /category/:id */}
      <Link href={link}>
        <a>
          <article className="overflow-hidden rounded-lg shadow-lg">
            <Image className="w-full" src={url} alt={title || "Category"} />
            <header className="items-center justify-between leading-tight p-8 bg-white md:flex">
              <h1 className="text-2xl h-20">{title || "Category"}</h1>
            </header>
          </article>
        </a>
      </Link>
    </div>
  );
};

export default Card;
