const IssueInfo = ({ issueTitle, issueDescription }) => {
  return (
    <div className="container bg-gray-300 w-full text-white p-10 py-16 sm:px-20 mx-auto">
      <div className="bg-white bg-opacity-80 text-gray-900 p-20 border rounded-xl">
        <h1 className="text-4xl sm:text-6xl font-bold py-4">{issueTitle}</h1>
        <p className="text-l sm:text-xl 1">{issueDescription}</p>
      </div>

      <style jsx>{`
        .container {
          background-image: url(https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
          background-repeat: no-repeat;
          background-size: cover;
          width: 100vw;
        }
      `}</style>
    </div>
  );
};

export default IssueInfo;
