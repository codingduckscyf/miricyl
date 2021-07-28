/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "./card";

const CategoriesSelection = ({ url, title }) => {
  //TODO: fetch data from API
  const arrayData = [
    {
      id: "12",
      title: "Anxiety",
      imgUrl: "https://picsum.photos/200/?random1",
    },
    {
      id: "12",
      title: "Depression",
      imgUrl: "https://picsum.photos/200/?random2",
    },
    {
      id: "12",
      title: "Paranoia",
      imgUrl: "https://picsum.photos/200/?random3",
    },
  ];
  return (
    <div className=" mt-16 md:mt-32 mb-4 mx-10 flex flex-col flex-grow items-center justify-center">
      <div>
        <h1 className="font-bold text-4xl">What are you needing help with?</h1>
        <p className="mt-2 text-gray-500 text-xl md:text-2xl">
          Select a topic from the options below to learn more.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          {arrayData.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              url={item.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSelection;
