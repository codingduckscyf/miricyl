const HeaderConditionSection = ({ searchInput, setSearchInput }) => {
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between p-10 md:p-20">
      <div className="md:px-8">
        <h3 className="text-lg md:text-xl font-extrabold">All Categories</h3>
        <p className="font-light md:font-normal text-sm md:text-base text-gray-500 mb-2">
          View all of our categories to get the most relevant information for
          yourself
        </p>
      </div>
      <div className="md:px-10">
        <label
          htmlFor="searchbox"
          className="text-gray-700 font-light md:font-light text-xs md:text-sm "
        >
          Search for a topic
        </label>
        <br></br>
        <input
          id="searchbox"
          className=" h-8 bg-white border-2 border-blue-300 shadow-sm rounded-md md:px-8 min-w-full"
          type="text"
          placeholder="e.g Depression"
          onChange={handleChange}
          value={searchInput}
        ></input>
      </div>
    </div>
  );
};

export default HeaderConditionSection;
