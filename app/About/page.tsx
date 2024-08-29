'use client'

import Head from 'next/head';

import Background from "@/components/Background/Background";
import ThumbnailAbout from "@/components/ThumbnailAbout/ThumbnailAbout";
import ScrollLine from "@/components/ScrollLine/ScrollLine";
import ContactCarousel from "@/components/ContactCarousel/ContactCarousel";
import TechnologiesSection from "@/components/TechnologiesSection/TechnologiesSection";
import AboutDraggable from "@/components/AboutDraggable/AboutDraggable";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

    return (
        <>
            <Head>
            <title>Diego Caviedes Website</title>
            <meta name="description" content="A little bit about me." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="z-10 flex flex-col min-h-screen">
                <Background></Background>
                <section id='ThumbnailAbout' className='relative flex items-center justify-center max-h-screen min-w-full min-h-screen p-0'>
                    <ThumbnailAbout></ThumbnailAbout>
                    <ScrollLine height={7}></ScrollLine>
                </section>
                <section id='AboutMe' className='relative min-w-full px-0 py-16'>
                    <AboutDraggable></AboutDraggable>
                </section>
                <section id='Technologies' className='relative flex items-center max-h-screen min-w-full p-0 mb-[10rem] md:mb-1rem'>
                    <TechnologiesSection></TechnologiesSection>
                </section>
                <section id='ContactSection' className='p-0'>
                    <ContactCarousel></ContactCarousel>
                </section>
            </main>
        </>
    )
}