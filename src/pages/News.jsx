import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function News() {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/articles")
            .then((res) => res.json())
            .then((data) => setArticle(data))
            .catch((err) => console.log("Error fetching events:", err));
    }, []);

    function truncateWords(text, wordLimit) {
        if (!text) return "";
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + "...";
    }

    return (
        <>
            <div className="w-full flex justify-center items-start min-h-screen bg-gray-50 py-12">
                <div className="container px-6 max-w-6xl">
                    <div className="mb-10 text-center">
                        <p className="uppercase tracking-wide text-sm text-gray-600">Latest News</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
                            Updates from The Scottish Games
                        </h1>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            Sign up to our newsletter to stay updated with the latest news and articles from The Scottish Games.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
                    >
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main column: blog-style post list */}
                        <main className="lg:col-span-2 space-y-8">
                            {articles.map((article) => (
                                <article
                                    key={article._id}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                                >
                                    {article.image_1 && (
                                        <img
                                            src={article.image_1}
                                            alt={article.title}
                                            loading="lazy"
                                            className="w-full h-64 object-cover"
                                        />
                                    )}

                                    <div className="p-6">
                                        <h2 className="text-2xl font-semibold text-black mb-2">
                                            {article.title}
                                        </h2>

                                        <p className="text-gray-700 mb-4">
                                            {truncateWords(article.Article, 40)}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={`/articles/${article._id}`}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Read more
                                            </Link>

                                            <div className="text-sm text-gray-500">
                                                {/* If you have a date field, replace this with article.date */}
                                                Posted by Paisley Games
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </main>

                        {/* Sidebar */}
                        <aside className="space-y-6">

                            {/* Newsletter */}
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="text-lg font-medium mb-3">Subscribe</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    Get the latest news delivered to your inbox.
                                </p>
                                <form className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="flex-1 border border-gray-200 rounded px-3 py-2 focus:outline-none"
                                    />
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;
