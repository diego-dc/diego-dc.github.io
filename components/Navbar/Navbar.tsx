"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isClick, setisClick] = useState(false);
    const [header, setHeader] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return ()=>{
            window.addEventListener('scroll', scrollHeader)
        }
    })


    return (
        <nav className={header ? "bg-[rgb(0,0,0,0.2)] z-50 fixed w-[100%] " : "bg-[transparent] z-50 fixed w-[100%]"}>
            <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/">DC</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center ml-4 space-x-8">
                            <a href="/">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 576 512"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    fill="currentColor"
                                    >
                                        <path 
                                            d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                                        />
                                </svg>
                            </a>
                            <a href="/About">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    fill="currentColor"
                                    >
                                        <path 
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                                        />
                                </svg>
                            </a>
                            <a href="/KCLPARTPage">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    fill="currentColor"
                                    >
                                        <path 
                                            d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                                        />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md" onClick={toggleNavbar}>
                            {isClick ? (
                                
                                <svg 
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ):
                                <svg 
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="text-center">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/"
                            className="block p-2"
                            >
                                Home
                            </a>
                            <a href="/About"
                            className="block p-2"
                            >
                                About
                            </a>
                            <a href="/KCLPARTPage"
                            className="block p-2"
                            >
                                KCLP.ART
                            </a>
                    </div>

                </div>
            )}
        </nav>
    )
}

export default Navbar;