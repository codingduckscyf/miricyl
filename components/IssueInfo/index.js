const IssueInfo = ({ issueTitle, issueDescription }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100  to-blue-200 p-10 py-16 sm:px-20">
      <h1 className="text-4xl sm:text-6xl font-bold py-8">{issueTitle}</h1>
      <p className="text-l sm:text-xl text-gray-600 pr-64">
        {issueDescription}
      </p>
    </div>
  );
};

export default IssueInfo;
