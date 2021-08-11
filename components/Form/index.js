import { useRef, useState } from "react";
import useSWR from "swr";
import * as yup from "yup";

const Form = ({ data, submit }) => {
  const { data: issuesData, error: issuesError } = useSWR(`/api/issues`);
  const [errors, setErrors] = useState([]);

  // destructuring data obj
  const {
    title: contentTitle,
    description: contentDescription,
    content_type: contentType,
    img_url: contentImgUrl,
    video_url: contentVideoUrl,
  } = data;

  // for ref
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

  const dataSchema = yup.object().shape({
    title: yup.string().min(1).required(),
    description: yup.string().required(),
    content_type: yup.string().required(),
    img_url: yup.string().url().required(),
    video_url: yup.string().url(),
  });

  const handleSubmit = async (event) => {
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

    try {
      await dataSchema.validate(data, { abortEarly: false });
      submit(data);
    } catch (error) {
      console.log(error.path);
      console.log(error.inner);
      setErrors(error.inner.map((el) => el.path));
    }
  };

  return (
    <div className="p-20 w-full h-auto">
      <form
        className="shadow w-4/5 h-auto p-8 mx-auto text-center bg-gray-100"
        onSubmit={handleSubmit}
      >
        {errors.length > 0 && (
          <h1 className="text-center text-2xl mb-2 text-red-600">
            Please fill all required fields
          </h1>
        )}
        <div>
          <div className="float-left w-1/4 mt-2 text-right">
            <label htmlFor="title" className="inline-block p-4">
              Title<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="float-left w-3/4 mt-2">
            <input
              ref={titleRef}
              type="text"
              id="title"
              name="title"
              defaultValue={contentTitle}
              className={`${
                errors.includes("title") && "border-red-600"
              } w-3/4 p-4 border border-gray-600 rounded resize-y`}
              placeholder="Content title..."
            />
          </div>
        </div>

        <div>
          <div className="float-left w-1/4 mt-2 text-right">
            <label htmlFor="description" className="inline-block p-4">
              Description <span className="text-red-600">*</span>
            </label>
          </div>
          <div className="float-left w-3/4 mt-2">
            <textarea
              ref={descriptionRef}
              type="text"
              id="description"
              name="description"
              defaultValue={contentDescription}
              className={`${
                errors.includes("description") && "border-red-600"
              } w-3/4 h-40 p-4 border border-gray-600 rounded resize-y`}
              placeholder="Content description..."
            />
          </div>
        </div>

        <div>
          <div className="float-left w-1/4 mt-2 text-right">
            <label htmlFor="content_type" className="inline-block p-4">
              Content Type<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="float-left w-3/4 mt-2">
            <input
              ref={contentTypeRef}
              type="text"
              id="content_type"
              name="content_type"
              defaultValue={contentType}
              className={`${
                errors.includes("content_type") && "border-red-600"
              } w-3/4 p-4 border border-gray-600 rounded resize-y`}
              placeholder="Content type..."
            />
          </div>
        </div>

        <div>
          <div className="float-left w-1/4 mt-2 text-right">
            <label htmlFor="img_url" className="inline-block p-4">
              Image Url<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="float-left w-3/4 mt-2">
            <input
              ref={imgUrlRef}
              type="text"
              id="img_url"
              name="img_url"
              defaultValue={contentImgUrl}
              className={`${
                errors.includes("img_url") && "border-red-600"
              } w-3/4 p-4 border border-gray-600 rounded resize-y`}
              placeholder="Paste img url here..."
            />
          </div>
        </div>

        <div>
          <div className="float-left w-1/4 mt-2 text-right">
            <label htmlFor="video_url" className="inline-block p-4">
              Video Url<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="float-left w-3/4 mt-2">
            <input
              ref={videoUrlRef}
              type="text"
              id="video_url"
              name="video_url"
              defaultValue={contentVideoUrl}
              className={`${
                errors.includes("video_url") && "border-red-600"
              } w-3/4 p-4 border border-gray-600 rounded resize-y`}
              placeholder="Video url..."
            />
          </div>
        </div>

        <div>
          <div className="float-left w-1/4 mt-2 text-right">
            <label htmlFor="issues" className="inline-block p-4">
              Choose an issue:
            </label>
          </div>
          <div className="float-left w-3/4 mt-2">
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
        <div>
          <input
            type="submit"
            value="Submit"
            className="border-2 cursor-pointer rounded-2xl text-white bg-blue-600 py-3 px-8 mt-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
