import ContentCard from "../ContentCard";

const Content = ({ contentArray, heartIconClickHandler, favorites }) => {
  return (
    <div className="px-12">
      <h1 className="text-2xl">{contentTitle}</h1>
      <ul className="flex flex-col sm:flex-row flex-wrap justify-between p-4 mt-6">
        {contentArray.map(
          ({ id, img_url, title, content_type, description, video_url }) => (
            <ContentCard
              key={id}
              isLiked={favorites.includes(id)}
              imgSrc={img_url ? img_url : "https://picsum.photos/100"}
              imgAlt={title}
              contentType={content_type}
              title={title}
              caption={description}
              link={video_url ?? "https://en.wikipedia.org/wiki/Mental_health"}
              heartIconClickHandler={() => heartIconClickHandler(id)}
              editUrl={`/update-content/${id}`}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default Content;
