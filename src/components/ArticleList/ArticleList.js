import data from "../../articles.json";
import Article from "../Article/Article";

const ArticleList = (props) => {
  return (
    <div className="mt-5 grid gap-5 m-auto max-w-2xl sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[90%]">
      {data.map((props, index) => (
        <Article key={index} {...props}/>
      ))}
    </div>
  );
};

export default ArticleList;
