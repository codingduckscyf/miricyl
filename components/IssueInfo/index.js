const IssueInfo = ({ issueTitle, issueDescription }) => {
  return (
    <div className="bg-yellow-100 p-10 sm:p-16">
      <h1 className="text-4xl sm:text-6xl font-extrabold py-8">{issueTitle}</h1>
      <p className="text-xl sm:text-2xl text-gray-600">{issueDescription}</p>
    </div>
  );
};

export default IssueInfo;
