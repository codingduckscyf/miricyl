import Link from "next/link";

const FooterList = ({ listName, listItems }) => {
  return (
    <div>
      <h1 className="pt-7 font-bold">{listName}</h1>
      <ul className="flex flex-col">
        {listItems.map((item, index) => (
          <li key={index} className="text-gray-500 text-sm">
            <Link href="/">
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
