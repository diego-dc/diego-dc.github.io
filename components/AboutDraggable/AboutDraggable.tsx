"use client"

import { useGSAP } from "@gsap/react";
import React from "react"
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import Image from 'next/image'
import "./AboutDraggable.css"

gsap.registerPlugin(Draggable);

const AboutDraggable = () => {

    useGSAP (() => {

        Draggable.create(".dragItem", {
            bounds: document.getElementById("containerDraggable"),
            inertia: true,
          });

          const dragItems = gsap.utils.toArray<HTMLElement>('.dragItem');

          if (dragItems.length > 0) {
            dragItems.forEach(dragItem => {
  
                  gsap.from(dragItem, {
                      opacity: 0,
                      rotationY: -80,
                      scrollTrigger: {
                          trigger: dragItem,
                          start: "top 100%",
                          end: "top 75%",
                          scrub: 4,
                      },
                  });
              });
          }

    }, []);

    return (
        <div className="flex flex-col gap-12">
            <div>
                <div className="container flex justify-center">
                    <div id="containerDraggable" className="relative flex w-full flex-col justify-center gap-4 md:w-10/12 xl:aspect-[6/4] xl:w-11/12 xl:min-h-[850px]">      
                        <div id="dragItem-1" className="dragItem w-full transition-all ease-out odd:ml-auto xl:absolute xl:w-[45%] odd:xl:ml-0">
                            <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 glossy-90">
                                    <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">About me</h2>
                                    <div className="flex gap-2 ml-auto text-base-300">
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em"><path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="icon" width="1em" height="1em" ><path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em" ><path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path></svg>
                                    </div>
                                </div>
                                <div className="p-4 font-medium markdown info-panel-lines glossy-75 text-neutral">
                                    <p>My name is <span className="text-[var(--color-highlight)]">Diego</span>, i am a <span className="text-[var(--color-highlight)]">software engineer</span> and <span className="text-[var(--color-highlight)]">full-stack developer</span>.</p>
                                    <p>I bring value to web development projects by merging <span className="text-[var(--color-highlight)]">technical expertise</span> with <span className="text-[var(--color-highlight)]">creativity and aesthetics</span>. This makes front-end development the perfect field to fully harness my skills.</p>
                                    <p>However, I also appreciate the importance of a <span className="text-[var(--color-highlight)]">well-crafted system</span> and <span className="text-[var(--color-highlight)]">clean, well-structured code</span>. That&apos;s why I enjoy learning, working, and being involved in <span className="text-[var(--color-highlight)]">every step</span> of creating applications that deliver <span className="text-[var(--color-highlight)]">real value</span>. This <span className="text-[var(--color-highlight)]">commitment</span> extends to delivering a well-done back-end as well.</p>
                                    <p>I enjoy taking on <span className="text-[var(--color-highlight)]">new challenges</span>, and there is always so much to learn! I am eager to <span className="text-[var(--color-highlight)]">keep learning</span> new things that allow me to continuously <span className="text-[var(--color-highlight)]">improve my work</span>.</p>
                                </div>
                            </div>
                        </div>

                        <div id="dragItem-2" className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[25%] odd:xl:ml-0">
                            <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 glossy-90">
                                    <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">Where i work</h2>
                                    <div className="flex gap-2 ml-auto text-base-300">
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em"><path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="icon" width="1em" height="1em" ><path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em" ><path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path></svg>
                                    </div>
                                </div>
                                <div className="p-4 font-medium markdown info-panel-lines glossy-75 text-neutral">
                                    <p>Currently based in <span className="text-[var(--color-highlight)]">Santiago, Chile</span> CL.</p>
                                    <p>My preference is always to work on something with international reach, but any interesting project can capture my attention!</p>
                                </div>
                            </div>
                        </div>

                        <div id="dragItem-3" className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[20%] odd:xl:ml-0">
                            <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 glossy-90">
                                    <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">Portrait</h2>
                                    <div className="flex gap-2 ml-auto text-base-300">
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em"><path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="icon" width="1em" height="1em" ><path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em" ><path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path></svg>
                                    </div>
                                </div>
                                <div className="p-0 m-0 font-medium markdown glossy-75 text-neutral">
                                    <Image
                                        src="/img/Portrait.JPG" 
                                        alt="Img1"
                                        width={0}
                                        height={0}
                                        style={{ width: '100%', height: 'auto' }}
                                        className="img-item"
                                    ></Image>
                                </div>
                            </div>
                        </div>

                        <div id="dragItem-4" className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[25%] odd:xl:ml-0">
                            <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 glossy-90">
                                    <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">My Hobbies</h2>
                                    <div className="flex gap-2 ml-auto text-base-300">
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em"><path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="icon" width="1em" height="1em" ><path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em" ><path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path></svg>
                                    </div>
                                </div>
                                <div className="p-4 font-medium markdown info-panel-lines glossy-75 text-neutral">
                                    <p>I love sports, specially team sports, which i enjoy the most.</p>
                                    <p>Board Games.</p>
                                    <p>Videogames.</p>
                                    <p>Movies.</p>
                                    <p>Reading.</p>
                                    <p>Digital Art.</p>
                                </div>
                            </div>
                        </div>

                        <div id="dragItem-5" className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[25%] odd:xl:ml-0">
                            <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 glossy-90">
                                    <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">@KCLP.ART</h2>
                                    <div className="flex gap-2 ml-auto text-base-300">
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em"><path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="icon" width="1em" height="1em" ><path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"></path></svg>
                                        <svg data-v-2cdc1c14="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="icon" width="1em" height="1em" ><path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path></svg>
                                    </div>
                                </div>
                                <div className="p-4 font-medium markdown info-panel-lines glossy-75 text-neutral">
                                    <p>I also create <span className="text-[var(--color-highlight)]">art</span> occasionally. Sometimes I feel the need to <span className="text-[var(--color-highlight)]">create something</span>, and this is my way of doing it. Check it out if you&apos;re interested!</p>
                                    <p>Visit KCLP.ART</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AboutDraggable;
