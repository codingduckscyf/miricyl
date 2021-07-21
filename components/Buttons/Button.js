const Button = ({ caption }) => {
  return (
    <div className="items-center">
      <button
        type="button"
        className=" inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
      >
        {caption}
      </button>
    </div>
  );
};

export default Button;

 