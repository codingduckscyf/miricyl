/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import React from "react";
import Card from "./card";
import convertSlugToTitle from "~/lib/convertSlugToTitle";
import mentalHealth from "../../public/images/mentalHealth.jpg";
import socialRelationship from "../../public/images/socialRelationship.jpg";
import lifeIssues from "../../public/images/lifeIssues.jpg";

const CategoriesSelection = () => {
  const { data: categories, error } = useSWR("/api/categories");
  const urlLookup = {
    "mental-health": mentalHealth,
    "life-issues": lifeIssues,
    "social-relationship": socialRelationship,
  };

  if (!categories && !error) {
    return <div>Loading...</div>;
  }

  if (!categories) {
    return <div>Not found.</div>;
  }

  return (
    <div className="mt-16 md:mt-32 mb-4 mx-10 flex flex-col flex-grow items-center justify-center">
      <div>
        <h1 className="font-bold text-4xl">What are you needing help with?</h1>
        <p className="my-3 text-gray-500 text-xl md:text-2xl">
          Select a topic from the options below to learn more.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center font-bold">
          {categories.data.map(({ id, slug }) => (
            <Card
              key={id}
              id={id}
              title={convertSlugToTitle(slug)}
              url={urlLookup[slug]}
              link={`/categories/${slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSelection;
