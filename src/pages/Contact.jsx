import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b 
        from-[#F1FCF7] 
        via-[#D3F1DA] 
        to-[#85A986]  p-6">
            <div className="bg-[#F1FCF7] p-8 rounded-lg shadow-lg w-full max-w-md border border-[#D3F1DA]">

                <h2 className="text-2xl font-bold mb-6 text-[#2A2D22]">
                    Contact Us
                </h2>

                <form className="space-y-4">

                    <div>
                        <label className="block mb-2 text-[#2A2D22]" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-[#D3F1DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A6C57] text-[#2A2D22] bg-white"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-[#2A2D22]" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-[#D3F1DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A6C57] text-[#2A2D22] bg-white"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-[#2A2D22]" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 border border-[#D3F1DA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A6C57] text-[#2A2D22] bg-white"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#5A6C57] text-[#F1FCF7] py-2 rounded-lg hover:bg-[#525B44] transition-colors font-medium"
                    >
                        Send Message
                    </button>

                </form>

                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-[#5A6C57] hover:text-[#525B44] mt-4"
                    aria-label="Back to home"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
}

export default Contact;
