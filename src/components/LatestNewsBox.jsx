import empty from "../assets/empty_news.jpeg";

const LatestNewsBox = ({ data }) => {
  return (
    <div className="border-2 border-gray-400 w-full mb-1 h-20 rounded-lg flex gap-1 cursor-pointer hover:shadow-md hover:shadow-slate-700 hover:scale-105">
        <img src={data.urlToImage} className="h-full w-20 object-fill rounded-md"/>
        <p className="text-ellipsis text-sm overflow-hidden leading-3 py-1 tracking-tight">{data.title}</p>
    </div>
  );
};

export default LatestNewsBox;
