import { useRef } from "react";
import useSWR from "swr";
import * as yup from "yup";

const Form = ({ data, submit }) => {
  const { data: issuesData, error: issuesError } = useSWR(`/api/issues`);

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

  if (!issuesData && !issuesError) {
    return <h1>Loading...</h1>;
  }

  if (!issuesData) {
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
      relations: Number(issueIdRef.current.value),
    };

    submit(data);
  };

  return (
    <div className="p-20 w-full">
      <form
        className="shadow w-full h-4/5 p-8 mx-auto text-center bg-gray-100"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="title" className="inline-block p-4">
              Title:
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <input
              ref={titleRef}
              type="text"
              id="title"
              name="title"
              defaultValue={contentTitle}
              className="w-3/4 p-4 border border-gray-600 rounded resize-y"
              placeholder="Content title..."
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="description" className="inline-block p-4">
              Description:
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <textarea
              ref={descriptionRef}
              type="text"
              id="description"
              name="description"
              defaultValue={contentDescription}
              className="w-3/4 h-40 p-4 border border-gray-600 rounded resize-y"
              placeholder="Content description..."
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="content_type" className="inline-block p-4">
              Content Type:
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <input
              ref={contentTypeRef}
              type="text"
              id="content_type"
              name="content_type"
              defaultValue={contentType}
              className="w-3/4 p-4 border border-gray-600 rounded resize-y"
              placeholder="Content type..."
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="img_url" className="inline-block p-4">
              Image Url:
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <input
              ref={imgUrlRef}
              type="text"
              id="img_url"
              name="img_url"
              defaultValue={contentImgUrl}
              className="w-3/4 p-4 border border-gray-600 rounded resize-y"
              placeholder="Paste img url here..."
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="video_url" className="inline-block p-4">
              Video Url:
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <input
              ref={videoUrlRef}
              type="text"
              id="video_url"
              name="video_url"
              defaultValue={contentVideoUrl}
              className="w-3/4 p-4 border border-gray-600 rounded resize-y"
              placeholder="Video url..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25 float-left w-1/4 mt-2">
            <label htmlFor="issues" className="inline-block p-4">
              Choose an issue:
            </label>
          </div>
          <div className="col-75 float-left w-3/4 mt-2">
            <select
              ref={issueIdRef}
              name="issues"
              id="issues"
              className="w-3/4 p-4 border border-gray-600 rounded resize-y"
            >
              {issuesData.data.map((issue) => {
                return (
                  <option key={issue.id} value={issue.id}>
                    {issue.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="border-2 cursor-pointer rounded-2xl text-white bg-blue-600 py-3 px-8 mt-2"
        />
      </form>
    </div>
  );
};

export default Form;
