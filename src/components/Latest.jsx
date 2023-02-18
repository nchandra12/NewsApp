import React, { useEffect, useState } from "react";
import LatestNewsBox from "./LatestNewsBox";

const Latest = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_15166dda739eec2fd13572edf999e308802d8"
        )
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (error) {
        console.log(error);
      }
    };
    func();
    // console.log(Data.results);
  }, []);

  return (
    <div className="flex flex-[0.4]  justify-center items-center ">
      <div className="rounded-lg shadow-inner shadow-neutral-400 h-5/6 w-11/12 flex flex-col items-center justify-start py-1  overflow-y-scroll scroll-hide">
        <span className="text-lg font-semibold mb-5">Latest News</span>
        {Data && Data.results.map((item) => (
          <LatestNewsBox data={item} />
        ))}
      </div>
    </div>
  );
};

export default Latest;