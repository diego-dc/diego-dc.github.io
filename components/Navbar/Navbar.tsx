"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css"
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

const Navbar = () => {
    const [isClick, setisClick] = useState(false);
    const [header, setHeader] = useState(false);
    const [initialVisible, setInitialVisible] = useState(false);

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

        const navbar = document.getElementById('navbar');
        const showNavbar = () => {
            if (navbar) {
                setInitialVisible(true);  // Mostrar el navbar después del tiempo
            }
        };
    
        const timer = setTimeout(showNavbar, 1000);
    
        // Añadir evento de scroll que siempre estará activo
        window.addEventListener('scroll', scrollHeader);
    
        return () => {
            // Limpiar el timeout cuando el componente se desmonte
            clearTimeout(timer);
    
            // Remover evento de scroll para evitar fugas de memoria
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);


    return (
        <nav id="navbar" className={`
            z-50 fixed w-full transition-all navbar 
            ${isClick ? "bg-[var(--color-primary)] h-screen" : ""} 
            ${header ? "bg-[rgb(0,0,0,0.2)] visible-navbar" : "bg-[transparent]"} 
            ${initialVisible ? "visible-navbar" : "hidden-navbar"}
          `}>
            <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            {isClick ? 
                            (
                                <svg 
                                    className="cursor-pointer text-slate-400 text-xl font-bold transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 640 512"
                                    width={24}
                                    height={24}
                                    stroke="currentColor"
                                    fill="currentColor"
                                >
                                        
                                        <path 
                                            d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                        />
                                </svg>
                            ):
                            (
                            <a href="/" className="cursor-pointer text-slate-400 text-xl font-bold transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">DC</a>
                            )}
                            </div>
                    </div>

                    <div className={`${isClick ? "hidden transition-all" : "hidden md:block transition-all"}`}>
                        <div className="flex items-center ml-4 space-x-12">
                            <a href="/" className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">
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
                            <a href="/About" className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">
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
                            <a href="/KCLPARTPage" className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">
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
                        <button
                        className="inline-flex items-center justify-center p-2 rounded-md"
                        onClick={toggleNavbar}
                        >
                        {isClick ? (
                            <svg
                                className="w-6 h-6 cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
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
                        ) : (
                            <svg
                                className="w-6 h-6 cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
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
                        )}
                        </button>
                    </div>
                </div>
            </div>
    
            {isClick && (
                <div className="flex flex-col items-center justify-center w-screen h-screen gap-32 text-center">
                    <div className="flex flex-col gap-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        <a href="/" className="block p-2 navlink">
                            Home
                        </a>
                        <a href="/About" className="block p-2 navlink">
                            About
                        </a>
                        <a href="/KCLPARTPage" className="block p-2 navlink">
                            KCLP.ART
                        </a>
                    </div>
                    <div className="hidden md:block">
                            <div className="flex items-center ml-4 space-x-12">
                                <a href="/" className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 496 512"
                                    width={30}
                                    height={30}
                                    stroke="currentColor"
                                    fill="currentColor">
                                        <path 
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        />
                                    </svg>
                                </a>
                                <a href="/" className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512"
                                    width={30}
                                    height={30}
                                    stroke="currentColor"
                                    fill="currentColor"
                                    >
                                        <path 
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                        />
                                    </svg>
                                </a>
                                <a href="/" className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90">
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 448 512"
                                    width={30}
                                    height={30}
                                    stroke="currentColor"
                                    fill="currentColor"
                                    >
                                        <path 
                                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                        />
                                    </svg>  
                                </a>
                            </div>
                    </div>
                </div>
            )}
        </nav>
      );
    }

export default Navbar;