import React from "react";

function AboutMe(){
    return(
        <div className="w-full h-fit  bg-brown sm:px-10 md:px-24 lg:px-36 xl:px-60" id="AboutMe">
            <h1 className="text-4xl p-2 mb-2 text-cream w-full text-center">About Me</h1>
            <div className="w-full flex flex-wrap text-center">
                
                <div className="w-full text-cream text-3xl m-5">
                    <div className="bg-dark p-2 rounded shadow-lg shadow-black">
                        <h1 className="font-montserrat font-bold pb-5">Personal</h1>
                        <p className="font-openSans text-lg">Hey there, I've got some big news to share with you all! cue excited screams I'm going to be a parent soon! Yes, you heard that right! I'm expecting a baby and I couldn't be more thrilled about it. We've decided to name him Oliver, after the Green Arrow {'(Pretty Cool I know)'}. I'm already planning on introducing him to all my favorite nerdy pastimes and can't wait to see what kind of little geek he turns out to be. And that's pretty much the biggest thing going on in my personal life right now. Catch you all in the next card!</p>
                    </div>
                </div>

                <div className="w-full text-cream text-3xl m-5">
                    <div className="bg-dark p-5 rounded shadow-lg shadow-black">
                        <h1 className="font-montserrat font-bold pb-5">Hobbies</h1>
                        <p className="font-openSans text-lg">Alright, let's talk about hobbies! I've got a few that I really enjoy, and you're actually experiencing one of them right now: making websites! I've gotten pretty skilled at it, even though it's just a hobby and I don't get paid for it (yet!). Speaking of which, keep me in mind if you're hiring for website design in the future.
                            When I need a break from coding, I love to play video games. It's a great way to give my brain a rest and recharge for the next coding session. And when I really want to switch things up, I like to build computers. It's a really satisfying feeling to see a machine come together piece by piece, and I always learn something new in the process.
                        </p>
                    </div>
                </div>

                <div className="w-full text-cream text-3xl m-5">
                    <div className="bg-dark p-5 rounded shadow-lg shadow-black">
                        <h1 className="font-montserrat font-bold pb-5">Work</h1>
                        <p className="font-openSans text-lg">I currently work at Amazon as a Senior Technician, specializing in conveyor and robotics systems. While it's a great job, I'm ready to pursue my passion for web development, which pays even better and is something I truly love. Making the switch can be challenging, but I'm excited for this new career path and to see where it takes me.</p>
                    </div>
                </div>

                <div className="w-full text-cream text-3xl m-5">
                    <div className="bg-dark p-5 rounded shadow-lg shadow-black">
                        <h1 className="font-montserrat font-bold pb-5">Goals</h1>
                        <p className="font-openSans text-lg">I'm really excited about all the things I'm working towards right now. One of my top priorities is getting in shape, and I'm already making great progress towards that goal.
                            In the long term, I have some big aspirations. As a web developer, I'm determined to keep advancing in my career and taking on new challenges. Additionally, I dream of acquiring some land where I can provide a home for all my loved ones, creating a community where we can all live and thrive together.
                            It's a lot to work towards, but I'm motivated and focused on making my dreams a reality. I'm excited to see what the future holds!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;