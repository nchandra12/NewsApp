import React from "react";

const NewsCard = ({ data }) => {
  return (
    <div className="h-52 w-full overflow-hidden rounded-md hover:shadow-lg hover:shadow-[#c21636] shadow-black shadow-lg hover:animate-wiggle cursor-pointer relative flex items-end">
      <img src={data.urlToImage} className="h-full w-full object-fill" />
      <div className=" text-neutral-300 absolute w-full h-full bg-gradient-to-b from-transparent to-[#000000d0]  flex p-2 items-end justify-start leading-4 ">{data.title}</div>
    </div>
  );
};

export default NewsCard;