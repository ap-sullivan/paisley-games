//contact page with tailwind css
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"          
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Send Message
                    </button>
                </form>

                 <Link
                    to="/"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4 mt-4"
                    aria-label="Back to home"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Contact;
