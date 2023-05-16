import React from "react";
import { ThemeContext } from "../App";

function Projects() {
    return (
        <div className="flex flex-wrap w-full min-h-screen justify-center h-full p-5 bg-dark sm:px-10 md:px-24 lg:px-36 xl:px-60" id="Projects">
            <h1 className="text-4xl p-2 mb-2 text-cream w-full text-center">Top Projects</h1>

            {/* Twitter Project */}
            <div className="max-w-2xl">
                <div className="w-full h-fit flex flex-wrap shadow-lg shadow-black">
                    <img src="/Images/Twitter-2.svg" className="w-full w-200 h-200" alt="Twitter" />
                    <div className="p-2 bg-darkish">
                        <h1 className="text-cream z-20 font-black font-montserrat text-xl">Twitter Clone  <i className="fa-brands fa-twitter"></i></h1>
                        <p className="text-cream font-openSans text-lg">This is a twitter clone website. One of my capstone projects actually!
                            You can actually visit this website right now at <a href="https://www.tfomo.net/" target='_blank' rel="noreferrer" className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent" aria-label="TFOMO">{'<TFOMO/> '}</a>
                            The website is a demonstration of my skills using the MERN Stack. It is its own RESTful application! Please feel free to make an account, and do not worry all passwords
                            are completely secure and only saved afte being salted and hashed multiple times.
                        </p>
                    </div>
                </div>

                <div className="w-full h-fit flex flex-wrap mt-5 shadow-lg shadow-black">
                    <img src="/Images/Ecommerce.svg" className="w-full w-200 h-200" alt="Ecommerce" />
                    <div className="p-2 bg-darkish">
                        <h1 className="text-cream z-20 font-black font-montserrat text-xl">Ecommerce Store <i className="fa-solid fa-store"></i></h1>
                        <p className="text-cream font-openSans text-lg">This is a working Ecommerce store complete with Stripe API. Although it wont actually let you
                            spend any money. That is becuase I turned it off due to having no inventory. It is purely for showcasing purposes. Another capstone that
                            I am very fond of. It uses all the same frameworks and middleware as my twitter clone!
                        </p>
                    </div>
                </div>

                <div className="w-full h-fit flex flex-wrap mt-5 shadow-lg shadow-black">
                    <img src="/Images/portfolio-2.svg" className="w-full w-200 h-200" alt="Portfilio" />
                    <div className="p-2 bg-darkish">
                        <h1 className="text-cream z-20 font-black font-montserrat text-xl">Portfoio Page <i className="fa-solid fa-folder"></i></h1>
                        <p className="text-cream font-openSans text-lg">This is a working Ecommerce store complete with Stripe API. Although it wont actually let you
                            spend any money. That is becuase I turned it off due to having no inventory. It is purely for showcasing purposes. Another capstone that
                            I am very fond of. It uses all the same frameworks and middle ware as my twitter clone!
                        </p>
                    </div>
                </div>

                <div className="w-full h-fit flex flex-wrap mt-5 shadow-lg shadow-black">
                    <img src="/Images/Netflix.svg" className="w-full w-200 h-200" alt="Portfilio" />
                    <div className="p-2 bg-darkish">
                        <h1 className="text-cream z-20 font-black font-montserrat text-xl">Netflix Clone <i className="fa-solid fa-video"></i></h1>
                        <p className="text-cream font-openSans text-lg">This is my Netflix Clone website. This was super fun to make and brought on new challenges.
                            It helped me learn how to deal with data in videos and how to really get good performance. It is also a fun type of design to copy.
                        </p>
                    </div>
                </div>       
            </div>

        </div>        
    )
}

export default Projects;