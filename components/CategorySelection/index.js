/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import React from "react";
import Card from "./card";

const CategoriesSelection = () => {
  const { data: categories, error } = useSWR("/api/categories");

  if (!categories && !error) {
    return <div>Loading...</div>;
  }

  if (!categories) {
    return <div>Not found.</div>;
  }
  return (
    <div className=" mt-16 md:mt-32 mb-4 mx-10 flex flex-col flex-grow items-center justify-center">
      <div>
        <h1 className="font-bold text-4xl">What are you needing help with?</h1>
        <p className="mt-2 text-gray-500 text-xl md:text-2xl">
          Select a topic from the options below to learn more.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center font-bold">
          {categories.data.map((category) => {
            let { id, name, imgUrl } = category;
            return (
              <Card
                key={id}
                id={id}
                title={name}
                url={imgUrl}
                link={`${name}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSelection;
