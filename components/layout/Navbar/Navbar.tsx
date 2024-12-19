"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import IconLaptopCode from "@/components/icons/IconLaptopCode";
import IconUser from "@/components/icons/IconUser";
import IconPalette from "@/components/icons/IconPalette";
import IconHouse from "@/components/icons/IconHouse";
import IconGithub from "@/components/icons/IconGithub";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconMail from "@/components/icons/IconMail";
import IconBars from "@/components/icons/IconBars";
import IconXmark from "@/components/icons/IconXmark";
import IconComputer from "@/components/icons/IconComputer";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const [header, setHeader] = useState(false);
  const [initialVisible, setInitialVisible] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const showNavbar = () => {
      if (navbar) {
        setInitialVisible(true); // Mostrar el navbar después del tiempo
      }
    };

    const timer = setTimeout(showNavbar, 1000);

    // Añadir evento de scroll que siempre estará activo
    window.addEventListener("scroll", scrollHeader);

    return () => {
      // Limpiar el timeout cuando el componente se desmonte
      clearTimeout(timer);

      // Remover evento de scroll para evitar fugas de memoria
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`
            z-50 fixed w-screen transition-all navbar 
            ${isClick ? "bg-[var(--color-primary)] h-screen" : ""} 
            ${header ? "bg-[rgb(0,0,0,0.2)] visible-navbar" : "bg-[transparent]"} 
            ${initialVisible ? "visible-navbar" : "hidden-navbar"}
          `}
    >
      <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {isClick ? (
                <IconComputer className="cursor-pointer text-slate-400 text-xl font-bold transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90" />
              ) : (
                <Link
                  href="/"
                  className="cursor-pointer text-slate-400 text-xl font-bold transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
                >
                  DC
                </Link>
              )}
            </div>
          </div>

          <div
            className={`${isClick ? "hidden transition-all" : "hidden md:block transition-all"}`}
          >
            <div className="flex items-center ml-4 space-x-12">
              <Link
                href="/"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconHouse />
              </Link>
              <Link
                href="/About"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconUser />
              </Link>
              <Link
                href="/Portfolio"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconLaptopCode />
              </Link>
              <Link
                href="/KCLPARTPage"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconPalette />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <IconXmark className="w-6 h-6 cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90" />
              ) : (
                <IconBars className="w-6 h-6 cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isClick && (
        <div className="flex flex-col items-center w-screen h-screen mt-0 text-center 2xl:mt-10 gap-14">
          <div className="flex flex-col gap-8 text-5xl md:text-6xl 2xl:text-8xl">
            <Link href="/" className="block p-2 navlink" onClick={toggleNavbar}>
              Home
            </Link>
            <Link
              href="/About"
              className="block p-2 navlink"
              onClick={toggleNavbar}
            >
              About
            </Link>
            <Link
              href="/Portfolio"
              className="block p-2 navlink"
              onClick={toggleNavbar}
            >
              My Work
            </Link>
            <Link
              href="/KCLPARTPage"
              className="block p-2 navlink"
              onClick={toggleNavbar}
            >
              KCLP.ART
            </Link>
          </div>
          <div className="">
            <div className="flex items-center ml-4 space-x-12">
              <Link
                href="https://github.com/diego-dc"
                target="_blank"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconGithub width={30} height={30} />
              </Link>
              <Link
                href="mailto:diegcavi21@gmail.com"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconMail width={30} height={30} />
              </Link>
              <Link
                href="https://linkedin.com/in/diego-caviedes-aguirre-022b6b225"
                target="_blank"
                className="cursor-pointer text-slate-400 transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl hover:scale-110 active:scale-90"
              >
                <IconLinkedin width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
