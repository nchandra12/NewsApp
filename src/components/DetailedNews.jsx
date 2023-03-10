import React, { useContext } from "react";
import { UserContext } from "../App";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const DetailedNews = () => {
  const { Data, setData } = useContext(UserContext);
  const data = Data.detailedNews;

  const handleClick = () => {
    setData({ ...Data, newsExpand: false, search: "" });
  };
  // console.log(Data.detailedNews);
  return (
    <div className="flex flex-col lg:flex-[0.7] w-full h-full justify-start items-center mx-3 lg:ml-3 overflow-y-scroll scroll-hide shadow-inner shadow-neutral-400 rounded-lg bg-orange-100 relative">
      <FaArrowLeft
        className="absolute top-5 left-5 scale-150 text-black hover:animate-pulse z-10 cursor-pointer"
        onClick={() => handleClick()}
      />
      <img
        src={data.urlToImage}
        className="h-2/3 w-full object-fill opacity-90"
      />
      <div className="flex flex-col items-start w-full p-4">
        <h1 className="text-2xl font-extrabold ">{data.title}</h1>
        <h1 className="text-xl font-bold ">
          {data.content === null
            ? "No data found !!!"
            : data.content.substring(0, data.content.indexOf("["))}
        </h1>
        <p className="italic">{data.description}</p>
      </div>
      <div className="place-items-end flex justify-between w-full px-4">
        <p>
          <span className="font-bold">Author:&nbsp;</span>
          {data.author ? data.author : "----"}
          <br />
          <span className="font-bold">Source:&nbsp;</span>
          {data.source.name ? data.source.name : "----"}
        </p>
        <a
          className="p-2 bg-teal-500 rounded-md shadow-md shadow-black mr-2 hover:bg-rose-600 hover:scale-125 duration-200 ease-in-out cursor-pointer"
          href={data.url}
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default DetailedNews;
