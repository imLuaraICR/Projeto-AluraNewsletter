const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="flex-col gap-2 items-center text-center p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg sm:hover:shadow-gray-400 sm:hover:dark:shadow-black sm:hover:shadow-lg">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full hidden justify-end gap-2 pr-5 sm:flex">
        {
            tags.map(tag => <span className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase hover:bg-alura-200 hover:scale-110" key={tag}>{tag}</span>)
        }
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p
            className="text-justify text-alura-200 dark:text-gray-400"
            key={index}
          >
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4" alt="" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
