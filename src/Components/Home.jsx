import React, { useState } from 'react';

function Home() {

    const [skills, setSkills] = useState(1)

    function getBackgroundColor(skills) {
        switch (skills) {
            case 0:
                return 'bg-orange-500';

            case 1:
                return 'bg-blue-500';

            case 2:
                return 'bg-yellow-300';

            case 3:
                return 'bg-blue-400';

            case 4:
                return 'bg-green';

            case 5:
                return 'bg-green';

            default:
                return 'bg-black';
        }
    }

    return (
        <div className='bg-dark h-full  transition-all duration-200 flex flex-wrap' id="Home">
            <div className="pb-5 w-full h-full flex flex-wrap justify-center bg-brown">
                <div className="w-full h-fit sm:h-1/2  text-white text-center mt-12">
                    <h1 className="font-montserrat text-5xl sm:text-6xl sm:mb-5  text-cream md:text-6xl">
                        Hi, I'm <br className="block md:hidden" />
                        <span className="inline-flex overflow-hidden pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform ">          
                            <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>Jon</span>
                        </span>
                        {/* The blinking cursor. */}
                        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white  md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
                    </h1>
                    <div className="text-2xl font-openSans md:text-3xl mt-2 p-2 mb-5 text-cream sm:mb-10 md:mb-24">A Self-Taught Full Stack Developer with a Unique Perspective</div>
                    <div className="absolute w-full flex justify-center mt-2">
                        <ul className='flex items-center w-fit rounded text-3xl bg-darker -mt-6 p-2 shadow-md shadow-black cursor-pointer'>
                            {/* If icon is selected then give it color. If not then dull it out. */}

                            {/* Front End */}
                            <li className={skills === 0 ? 'p-1 px-2 text-orange-500 transition-all duration-200 ' : 'transition-all duration-200 p-1 px-2 text-dark'}><i onClick={() => { setSkills(0) }} className="fa-brands fa-html5"></i></li>
                            <li className={skills === 1 ? 'p-1 px-2 text-blue-500 transition-all duration-200' : 'transition-all duration-200 p-1 px-2 text-dark'}><i onClick={() => { setSkills(1) }} className="fa-brands fa-css3-alt"></i></li>
                            <li className={skills === 2 ? 'p-1 px-2 text-yellow-300 transition-all duration-200' : 'p-1 px-2 transition-all duration-200 text-dark'}><i onClick={() => { setSkills(2) }} className="fa-brands fa-js"></i></li>
                            <li className={skills === 3 ? 'p-1 px-2 text-blue-400 transition-all duration-200' : 'transition-all duration-200 p-1 px-2 text-dark'}><i onClick={() => { setSkills(3) }} className="fa-brands fa-react"></i></li>
                            <li className="px-1 text-dark text-3xl mb-1">|</li>
                            {/* Back End */}
                            <li className={skills === 4 ? "p-1 px-2 text-green transition-all duration-200" : 'transition-all duration-200 p-1 px-2 text-dark'}><i onClick={() => { setSkills(4) }} className="fa-brands fa-node"></i></li>
                            <li className="p-1 px-2 w-12">{skills === 5 ? <img onClick={() => { setSkills(5) }} src="/Images/mongodb.svg" alt="Mongodb" className='w-200 h-200' /> : <img onClick={() => { setSkills(5) }} src="/Images/mongodb-dull.svg" className='w-200 h-200' alt="Mongodb" />}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Set the desc for each skill */}
            <div className='flex w-full h-full justify-center mt-6 px-5 pb-5 pt-10 text-cream sm:px-10 md:px-24 lg:px-36 xl:px-60'>{
                skills === 0 ?
                    <div className='w-full flex flex-wrap justify-center bg-darker rounded'>
                        <div className={`${getBackgroundColor(skills)} w-full h-1 rounded-tl rounded-tr `}></div>
                        <div className='p-2'>
                            <h1 className="text-2xl pb-2 font-bold w-full text-center font-montserrat">{'<HTML/>'}</h1>
                            <p className='w-full text-center text-xl font-openSans'>This is the fundamentals of a website. It is important to understand this. It is one of the first things developers
                                learn. It is obviously included in all my projects. If it was not, you would not see anything!
                            </p>
                        </div>

                    </div> :

                    skills === 1 ?
                        <div className='w-full flex flex-wrap justify-center bg-darker rounded'>
                            <div className={`${getBackgroundColor(skills)} w-full h-1 rounded-tl rounded-tr`}></div>
                            <div className="p-2">
                                <h1 className="text-2xl pb-2 w-full text-center font-bold font-montserrat">{'<CSS/> <Tailwind/> <Bootstrap 5/>'}</h1>
                                <p className='w-full text-center text-xl font-openSans'>
                                    In the realm of CSS. This is what I know. These frameworks both have their own use cases. I have really leaned
                                    towards Tailwind css simply becuase of how light weight the framework is. It really has shown a difference in
                                    my projects as far as the performace metrics!
                                </p>
                            </div>
                        </div> :

                        skills === 2 ?
                            <div className='w-full pb-2 flex flex-wrap justify-center bg-darker rounded'>
                                <div className={`${getBackgroundColor(skills)} w-full h-1 rounded-tl rounded-tr`}></div>
                                <div className="p-2">
                                    <h1 className="text-2xl pb-2 font-bold w-full text-center font-montserrat">{'<Javascript/> <Jquery/>'}</h1>
                                    <p className='w-full text-center text-xl font-openSans'>
                                        Javascript is another fundamental that I believe developers absolutely must know the basics of at minimum. Both Front-end
                                        and Back-end both use them and websites are not actually functional without them. Coding is the reason I got into web development
                                        so I use it constantly and I am also always looking up new ways to use it!
                                    </p>
                                </div>
                            </div> :

                            skills === 3 ?
                                <div className='w-full flex flex-wrap justify-center bg-darker rounded'>
                                    <div className={`${getBackgroundColor(skills)} w-full h-1 rounded-tl rounded-tr`}></div>
                                    <div className="p-2">
                                        <h1 className="text-2xl mb-2 font-bold w-full text-center font-montserrat">{'<React/>'}</h1>
                                        <p className='w-full text-center text-xl font-openSans'> React is my absolute most favorite library! Ever since I had found out about it I have used it
                                            in every single project I have. It is a great tool to make production go really fast. It is also great to use in combination with
                                            frameworks like Tailwind. I love it so much that my currently Portfolio page is using it, and you are looking at it!
                                        </p>
                                    </div>

                                </div> :

                                skills === 4 ?
                                    <div className='w-full flex flex-wrap justify-center bg-darker rounded'>
                                        <div className={`${getBackgroundColor(skills)} w-full h-1 rounded-tl rounded-tr`}></div>
                                        <div className="p-2">
                                            <h1 className="text-2xl mb-2 font-bold w-full text-center font-montserrat">{'<NodeJS/> <Express/>'}</h1>
                                            <p className='w-full text-center text-xl font-openSans'>
                                                On to the fun stuff! I am using Node.JS and Express on a lot of my Capstone projects! It is a great tool for handling all of my
                                                HTTP requests between my server and client sides. Express is a must have tool for myself if I want to continue to build my RESTful APIs.
                                                One of my favorite things to do is watching my client side ask my server things and my server responding with all the data. I find it
                                                truly fascinating
                                            </p>
                                        </div>

                                    </div> :

                                    skills === 5 &&
                                    <div className='w-full flex flex-wrap justify-center bg-darker rounded'>
                                        <div className={`${getBackgroundColor(skills)} w-full h-1 rounded-tl rounded-tr`}></div>
                                        <div className="p-2">
                                            <h1 className="text-2xl mb-2 font-bold w-full text-center font-montserrat">{'<Mongodb/> <Mongoose/>'}</h1>
                                            <p className='w-full text-center text-xl font-openSans'>
                                                MongoDB is my first learned NoSQL Database. Using Mongodb and Mongoose to create and communicate to my Databases is extremely fun,
                                                but can also be extremely frustrating. Data can be a tricky thing to get correct and protecting that data is even more tricky. Adding middleware
                                                like Passport to authenticate users is the coolest thing to do surrounding databases and it truly shows its worth as there
                                                is a TON of website that have users and there is no such thing as a user that wants their password unprotected.
                                            </p>
                                        </div>
                                    </div>}
            </div>

        </div>
    )
}

export default Home;