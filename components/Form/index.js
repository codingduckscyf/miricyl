import { useRef } from "react";
import useSWR from "swr";
import * as yup from "yup";

const Form = ({ data, submit }) => {
  const { data: issuesData, error: issuesError } = useSWR(`/api/issues`);
  const { data: categoriesData, error: categoriesError } =
    useSWR("/api/categories");
  // destructuring data
  const {
    title: contentTitle,
    description: contentDescription,
    content_type: contentType,
    img_url: contentImgUrl,
    video_url: contentVideoUrl,
  } = data;

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentTypeRef = useRef(null);
  const imgUrlRef = useRef(null);
  const videoUrlRef = useRef(null);
  const issueIdRef = useRef(null);
  const categoryIdRef = useRef(null);

  if ((!issuesData && !issuesError) || (!categoriesData && !categoriesError)) {
    return <h1>Loading...</h1>;
  }

  if (!issuesData || !categoriesData) {
    return <h1>Not found</h1>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // data for page
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      content_type: contentTypeRef.current.value,
      img_url: imgUrlRef.current.value,
      video_url: videoUrlRef.current.value,
      relations: [
        {
          id: Number(issueIdRef.current.value),
          category_id: Number(categoryIdRef.current.value),
        },
      ],
    };

    submit(data);
  };

  return (
    <div className="h-screen p-20 bg-blue-200">
      <form
        action=""
        className="bg-green-300 w-3/4 h-4/5 p-8 mx-auto text-center"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="fname" className="inline-block p-4">
              First Name
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              className="w-3/4 p-4 border border-indigo-600 resize-y bg-gray-300"
            />
          </div>
        </div>

        <div>
          <label htmlFor="title">Title:</label>
          <input
            ref={titleRef}
            type="text"
            id="title"
            name="title"
            defaultValue={contentTitle}
            className="border-2 border-indigo-600 mb-12"
          />
          <br></br>
          <label htmlFor="description">Description:</label>
          <input
            ref={descriptionRef}
            type="text"
            id="description"
            name="description"
            defaultValue={contentDescription}
            className="border-2 border-indigo-600 mb-12"
          />
          <br></br>
          <label htmlFor="content_type">Content Type:</label>
          <input
            ref={contentTypeRef}
            type="text"
            id="content_type"
            name="content_type"
            defaultValue={contentType}
            className="border-2 border-indigo-600 mb-12"
          />
          <br></br>
          <label htmlFor="img_url">Image Url:</label>
          <input
            ref={imgUrlRef}
            type="text"
            id="img_url"
            name="img_url"
            defaultValue={contentImgUrl}
            className="border-2 border-indigo-600 mb-12"
          />
          <br></br>
          <label htmlFor="video_url">Video Url:</label>
          <input
            ref={videoUrlRef}
            type="text"
            id="video_url"
            name="video_url"
            defaultValue={contentVideoUrl}
            className="border-2 border-indigo-600 mb-12"
          />
          <br></br>
        </div>
        <label htmlFor="issues">Choose an issue:</label>
        <select ref={issueIdRef} className="select" name="issues" id="issues">
          {issuesData.data.map((issue) => {
            return (
              <option key={issue.id} value={issue.id}>
                {issue.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="categories">Choose category:</label>
        <select
          ref={categoryIdRef}
          className="select"
          name="categories"
          id="categories"
        >
          {categoriesData.data.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <input
          type="submit"
          value="Submit"
          className="border-2 border-red-600"
        ></input>
      </form>
    </div>
  );
};

export default Form;
