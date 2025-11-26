import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function News() {


  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/articles")
      .then(res => res.json())
      .then(data => setArticle(data))
      .catch(err => console.log("Error fetching events:", err));
  }, []);

  function truncateWords(text, wordLimit) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}


  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen">
        <div className="container px-6 py-16 max-w-4/5">
          <div className="mb-12 space-y-2 text-center">
            <p className="ml-2 pb-2 uppercase tracking-loose">Latest News</p>
            <h2 className="text-2xl text-black font-bold md:text-4xl mb-2">
              Updates from the <span className="">Paisley Games</span>
            </h2>
            <p className="lg:w-6/12 lg:mx-auto mb-4">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
              debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2">
           {articles.map(article => (
            <div key={article._id} className="p-4 rounded-xl group sm:flex space-x-6x bg-green-300 bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img
                  src={article.image_1}
                alt={article.title}
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
              />

              <div className="sm:w-7/12 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black">  {article.title}</h4>
                    <p className="">
                      {truncateWords(article.Article, 25)}
                    </p>
                  </div>

                  <Link to=""
                    
                    className="block w-max hover:cursor-pointer"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
               ))}

            <Link
              to="/news"
              className="font-medium mr-auto text-black tracking-wide rounded shadow hover:shadow-lg transition ease-in-out duration-300 py-2 px-4"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
