'use client'

import Head from 'next/head';
import React from "react";
import "../gsap/effects";

import Background from '../components/Background/Background';
import Thumbnail from '../components/Thumbnail/Thumbnail';
import ScrollLine from '../components/ScrollLine/ScrollLine';
import AboutSection from '../components/AboutSection/AboutSection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import ContactCarousel from '@/components/ContactCarousel/ContactCarousel';

export default function Page() {

  return (
    <>
      <Head>
        <title>Diego Caviedes Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col min-h-screen z-10">
        <Background></Background>
        <section id='Thumbnail' className='flex min-h-screen max-h-screen min-w-full items-center justify-center relative'>
          <Thumbnail></Thumbnail>
          <ScrollLine height={6}></ScrollLine>
        </section>
        <section id='AboutSection' className='flex relative min-h-fit p-72 items-center justify-center'>
          <AboutSection></AboutSection>
          <ScrollLine height={6}></ScrollLine>
        </section>
        <section id='AboutSection' className='relative px-0'>
          <PortfolioSection></PortfolioSection>
        </section>
        <section id='ContactSection' className='p-0'>
          <ContactCarousel></ContactCarousel>
        </section>
      </main>
    </>
  );
}
