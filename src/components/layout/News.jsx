import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function News() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://paisley-highland-games-gamma.vercel.app/api/articles")
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

          <div className="mb-12 space-y-2 text-center text-[#2A2D22]">
            <p className="ml-2 pb-2 uppercase tracking-loose">Latest News</p>

            <h2 className="text-2xl font-bold md:text-4xl mb-2 text-[#2A2D22]">
              Updates from the <span className="">Paisley Games</span>
            </h2>

            <p className="lg:w-6/12 lg:mx-auto mb-4">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
              debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2">
            {articles.map(article => (
              <div
                key={article._id}
                className="p-4 rounded-xl group sm:flex space-x-6 bg-[#D3F1DA]/50 shadow-xl hover:rounded-2xl"
              >
                <img
                  src={article.Image_1}
                  alt={article.title}
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                />

                <div className="sm:w-7/12 p-5 text-[#2A2D22]">
                  <div className="space-y-2">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-[#2A2D22]">
                        {article.title}
                      </h4>

                      <p>{truncateWords(article.Article, 25)}</p>
                    </div>

                    <Link to="" className="block w-max hover:cursor-pointer text-[#5A6C57]">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/news"
              className="w-max px-4 py-2 bg-[#5A6C57] text-[#F1FCF7] rounded font-medium tracking-wide hover:bg-[#525B44] transition"
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
