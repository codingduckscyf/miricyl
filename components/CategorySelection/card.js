/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Card = ({ url, title, id }) => {
  return (
    <div className='w-full p-5 md:w-1/2 lg:w-1/3'>
      {/* TODO: Page /category/:id */}
      <Link href='/'>
        <a>
          <article className='overflow-hidden rounded-lg shadow-lg'>
            <img
              className='w-full'
              src={url || "https://picsum.photos/100"}
              alt={title || "Category"}
            />
            <header className='items-center justify-between leading-tight p-2 bg-white hidden lg:flex'>
              <h1 className='text-lg'>{title || "Category"}</h1>
            </header>
          </article>
        </a>
      </Link>
    </div>
  );
};

export default Card;
