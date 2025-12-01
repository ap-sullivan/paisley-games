import React from 'react'

function Contact() {
    return (
        <>
            <div className="flex items-center justify-center mt-16 mb-32  ">

            <div className="container px-6 max-w-xl bg-[#F1FCF7] py-8 rounded-xl ">
                 <h2 className="uppercase mb-2 font-bold">Contact</h2>

              <h3 className="text-3xl mb-3 text-[#2A2D22]">
               Get in Touch
              </h3>

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
                            required
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
                            required
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



            </div>
            </div>

        </>


    )
}

export default Contact
