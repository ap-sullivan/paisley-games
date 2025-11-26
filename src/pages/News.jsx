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
            <div className="w-full flex justify-center items-start min-h-screen py-12">
                <div className="container px-6 max-w-6xl">

                    {/* Header */}
                    <div className="mb-10 text-center text-[#2A2D22]">
                        <p className="uppercase tracking-wide text-sm text-[#525B44]">
                            Latest News
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#2A2D22]">
                            Updates from The Scottish Games
                        </h1>

                        <p className="mt-3 max-w-2xl mx-auto text-[#525B44]">
                            Sign up to our newsletter to stay updated with the latest news and articles from The Scottish Games.
                        </p>
                    </div>

                    {/* Back button */}
                    <Link
                        to="/"
                        className="inline-block mb-6 px-4 py-2 bg-[#5A6C57] text-[#F1FCF7] rounded hover:bg-[#525B44] transition"
                    >
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Articles */}
                        <main className="lg:col-span-2 space-y-8">
                            {articles.map((article) => (
                                <article
                                    key={article._id}
                                    className="bg-[#F1FCF7] rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-[#D3F1DA]"
                                >
                                    {article.image_1 && (
                                        <img
                                            src={article.image_1}
                                            alt={article.title}
                                            loading="lazy"
                                            className="w-full h-64 object-cover"
                                        />
                                    )}

                                    <div className="p-6 text-[#2A2D22]">
                                        <h2 className="text-2xl font-semibold mb-2">
                                            {article.title}
                                        </h2>

                                        <p className="mb-4 text-[#525B44]">
                                            {truncateWords(article.Article, 40)}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={`/articles/${article._id}`}
                                                className="text-[#5A6C57] hover:underline"
                                            >
                                                Read more
                                            </Link>

                                            <div className="text-sm text-[#525B44]">
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
                            <div className="bg-[#F1FCF7] p-4 rounded-lg shadow-sm border border-[#D3F1DA]">
                                <h3 className="text-lg font-medium mb-3 text-[#2A2D22]">Subscribe</h3>

                                <p className="text-sm text-[#525B44] mb-3">
                                    Get the latest news delivered to your inbox.
                                </p>

                                <form className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="flex-1 border border-[#D3F1DA] rounded px-3 py-2 focus:outline-none text-[#000000] bg-white"
                                    />

                                    <button className="px-4 py-2 bg-[#5A6C57] text-[#F1FCF7] rounded hover:bg-[#525B44]">
                                        Subscribe
                                    </button>
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
