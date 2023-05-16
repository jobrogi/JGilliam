import React, { useState } from 'react';

function Nav() {

    const [nav, toggleNav] = useState(false);

    function HandleNav() {
        if (nav === true) {
            toggleNav(false);
        } else {
            toggleNav(true);
        }
    }

    const [theme, toggleTheme] = useState(true)
    return (
        <div className='absolute'>
            {/* <div className={nav === true ? "text-red-200 p-3 mt-2 translate-x-52 transition-all duration-200 relative z-20" : 'text-cream p-3 transition-all duration-200  relative z-20'}><button className='outline-none' onClick={HandleNav}><i className="fa-solid fa-bars text-3xl"></i></button></div> */}
            <div className={nav === true ? "text-cream p-3 mt-2 translate-x-52 transition-all duration-200 fixed top-0 left-0 z-20" : 'text-cream p-3 transition-all duration-200  fixed top-0 left-0 z-20'}>{nav === true ? <i onClick={() => { toggleNav(false) }} className="cursor-pointer fa-solid fa-bars-staggered text-3xl"></i> : <button aria-label="Menu" className='outline-none' onClick={HandleNav}><i className="fa-solid fa-bars text-3xl"></i></button>}</div>
            <div className={nav === true ? "bg-gradient-to-bl from-darker to-black min-w-fit h-full fixed top-0 left-0  transition-all duration-200 z-20 " : "bg-gradient-to-bl from-darker to-black min-w-fit h-full fixed top-0 left-0 -translate-x-52 transition-all duration-200 z-20 shadow-2xl shadow-black"}>
                <div className='w-52 text-cream'>
                    <ul className='p-2 flex'>
                        <li className='w-1/4 h-fit text-center rounded-full bg-dark p-2'><i className="fa-solid fa-user"></i></li>
                        <ul className='flex flex-wrap'>
                            <li className="w-3/4 text-sm font-montserrat pl-2 whitespace-nowrap">Jonathon Gilliam</li>
                            <li className="w-3/4 text-sm font-montserrat pl-2 whitespace-nowrap">Software Developer</li>
                        </ul>

                        {/* Profile */}
                    </ul>
                    {/* <hr className='w-full' /> */}

                    <ul className='flex flex-wrap'>
                        <li className='p-2 text-center w-1/3' aria-label="Email"><a href="mailto: Jobrogi@gmail.com?subject=Portfolio Website"><i className="fa-solid fa-envelope"></i></a></li>
                        <li className='p-2 text-center w-1/3' aria-label="Github"><a href="https://github.com/jobrogi" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                        <li className='p-2 text-center w-1/3' aria-label="Linkedin"><a href="https://www.linkedin.com/in/JBGilliam" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>

                    </ul>
                    <hr className='w-full' />

                    <ul>
                        <li className='w-full p-2 text-center'><a href="#Home" className='cursor-pointer'>Home</a> </li>
                        <li className='w-full p-2 text-center'><a href="#Projects" className='cursor-pointer'>Projects</a></li>
                        <li className='w-full p-2 text-center'><a href="#AboutMe" className='cursor-pointer'>About Me</a></li>
                        <li className='w-full p-2 text-center'><a href="/Resume.pdf" className='cursor-pointer' target='_blank' rel="noreferrer">Download Resume</a></li>
                    </ul>                    
                    {/* For Set Theme Implementation */}
                    {/* <ul className='text-3xl'>
                        {theme === false && <li className='w-full p-2 text-center'><button onClick={()=>{toggleTheme(true)}}><i className="fa-solid fa-toggle-on"></i></button></li>}
                        {theme === true && <li className='w-full p-2 text-center'><button onClick={()=>{toggleTheme(false)}}><i className="fa-solid fa-toggle-off"></i></button></li>}
                    </ul> */}

                </div>
                {/* <div className='bg-green w-1 h-screen absolute top-0 right-0'></div> */}

            </div>
        </div>

    )
}

export default Nav;