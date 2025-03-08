"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import "./AboutDraggable.css";
import IconWindowExpand from "@/components/icons/IconWindowExpand";
import IconXmark from "@/components/icons/IconXmark";
import IconWindowMinimize from "@/components/icons/IconWindowMinimize copy";
import IconSquareArrowUpRight from "@/components/icons/IconSquareArrowUpRight";

gsap.registerPlugin(Draggable);

const AboutDraggable = () => {
  useGSAP(() => {
    Draggable.create(".dragItem", {
      bounds: document.getElementById("containerDraggable"),
      inertia: true,
    });

    const dragItems = gsap.utils.toArray<HTMLElement>(".dragItem");

    if (dragItems.length > 0) {
      dragItems.forEach((dragItem) => {
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
        <div className="container flex justify-center px-4">
          <div
            id="containerDraggable"
            className="relative flex w-full flex-col justify-center gap-4 md:w-10/12 xl:aspect-[6/4] xl:w-11/12 xl:min-h-[850px]"
          >
            <div
              id="dragItem-1"
              className="dragItem w-full transition-all ease-out odd:ml-auto xl:absolute xl:w-[45%] odd:xl:ml-0"
            >
              <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 backdrop-blur-lg">
                  <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">
                    About me
                  </h2>
                  <div className="flex gap-2 ml-auto text-base-300">
                    <IconWindowMinimize width={16} height={16} />
                    <IconWindowExpand width={16} height={16} />
                    <IconXmark width={16} height={16} />
                  </div>
                </div>
                <div className="p-4 font-medium markdown info-panel-lines backdrop-blur-sm text-neutral">
                  <p>
                    My name is{" "}
                    <span className="text-[var(--color-highlight)]">Diego</span>
                    , i am a{" "}
                    <span className="text-[var(--color-highlight)]">
                      software engineer
                    </span>{" "}
                    and{" "}
                    <span className="text-[var(--color-highlight)]">
                      full-stack developer
                    </span>
                    .
                  </p>
                  <p>
                    I bring value to web development projects by merging{" "}
                    <span className="text-[var(--color-highlight)]">
                      technical expertise
                    </span>{" "}
                    with{" "}
                    <span className="text-[var(--color-highlight)]">
                      creativity and aesthetics
                    </span>
                    . This makes front-end development the perfect field to
                    fully harness my skills.
                  </p>
                  <p>
                    However, I also appreciate the importance of a{" "}
                    <span className="text-[var(--color-highlight)]">
                      well-crafted system
                    </span>{" "}
                    and{" "}
                    <span className="text-[var(--color-highlight)]">
                      clean, well-structured code
                    </span>
                    . That&apos;s why I enjoy learning, working, and being
                    involved in{" "}
                    <span className="text-[var(--color-highlight)]">
                      every step
                    </span>{" "}
                    of creating applications that deliver{" "}
                    <span className="text-[var(--color-highlight)]">
                      real value
                    </span>
                    . This{" "}
                    <span className="text-[var(--color-highlight)]">
                      commitment
                    </span>{" "}
                    extends to delivering a well-done back-end as well.
                  </p>
                  <p>
                    I enjoy taking on{" "}
                    <span className="text-[var(--color-highlight)]">
                      new challenges
                    </span>
                    , and there is always so much to learn! I am eager to{" "}
                    <span className="text-[var(--color-highlight)]">
                      keep learning
                    </span>{" "}
                    new things that allow me to continuously{" "}
                    <span className="text-[var(--color-highlight)]">
                      improve my work
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div
              id="dragItem-2"
              className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[25%] odd:xl:ml-0"
            >
              <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 backdrop-blur-lg">
                  <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">
                    Where i work
                  </h2>
                  <div className="flex gap-2 ml-auto text-base-300">
                    <IconWindowMinimize width={16} height={16} />
                    <IconWindowExpand width={16} height={16} />
                    <IconXmark width={16} height={16} />
                  </div>
                </div>
                <div className="p-4 font-medium markdown info-panel-lines backdrop-blur-sm text-neutral">
                  <p>
                    Currently based in{" "}
                    <span className="text-[var(--color-highlight)]">
                      Santiago, Chile
                    </span>{" "}
                    CL.
                  </p>
                  <p>
                    I’m eager to work on projects with international reach, but
                    I’m open to any exciting opportunity that captures my
                    interest!
                  </p>
                </div>
              </div>
            </div>

            <div
              id="dragItem-3"
              className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[20%] odd:xl:ml-0"
            >
              <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 backdrop-blur-lg">
                  <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">
                    Portrait
                  </h2>
                  <div className="flex gap-2 ml-auto text-base-300">
                    <IconWindowMinimize width={16} height={16} />
                    <IconWindowExpand width={16} height={16} />
                    <IconXmark width={16} height={16} />
                  </div>
                </div>
                <div className="p-0 m-0 font-medium markdown backdrop-blur-sm text-neutral">
                  <Image
                    src="/img/Portrait.JPG"
                    alt="Img1"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "auto" }}
                    className="img-item"
                  ></Image>
                </div>
              </div>
            </div>

            <div
              id="dragItem-4"
              className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[25%] odd:xl:ml-0"
            >
              <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 backdrop-blur-lg">
                  <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">
                    My Hobbies
                  </h2>
                  <div className="flex gap-2 ml-auto text-base-300">
                    <IconWindowMinimize width={16} height={16} />
                    <IconWindowExpand width={16} height={16} />
                    <IconXmark width={16} height={16} />
                  </div>
                </div>
                <div className="p-4 font-medium markdown info-panel-lines backdrop-blur-sm text-neutral">
                  <p>
                    I love sports, specially team sports, which i enjoy the
                    most.
                  </p>
                  <p>Board Games.</p>
                  <p>Videogames.</p>
                  <p>Movies.</p>
                  <p>Reading.</p>
                  <p>Digital Art.</p>
                </div>
              </div>
            </div>

            <div
              id="dragItem-5"
              className="dragItem w-10/12 sm:w-8/12 md:w-7/12 transition-all ease-out odd:ml-auto xl:absolute xl:w-[25%] odd:xl:ml-0"
            >
              <div className="flex flex-col h-full overflow-hidden border rounded border-base-300">
                <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 backdrop-blur-lg">
                  <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">
                    @KCLP.ART
                  </h2>
                  <div className="flex gap-2 ml-auto text-base-300">
                    <IconWindowMinimize width={16} height={16} />
                    <IconWindowExpand width={16} height={16} />
                    <IconXmark width={16} height={16} />
                  </div>
                </div>
                <div className="p-4 font-medium markdown info-panel-lines backdrop-blur-sm text-neutral">
                  <p>
                    I also create{" "}
                    <span className="text-[var(--color-highlight)]">art</span>{" "}
                    occasionally. Sometimes I feel the need to{" "}
                    <span className="text-[var(--color-highlight)]">
                      create something
                    </span>
                    , and this is my way of doing it. Check it out if
                    you&apos;re interested!
                  </p>
                  <p className="flex flex-row cursor-pointer underline-offset-1">
                    <a
                      href="/KCLPARTPage"
                      className="flex flex-row underline items-center transition duration-300 ease-linear hover:text-[var(--color-highlight)] hover:shadow-2xl active:scale-95"
                    >
                      Visit KCLP.ART
                      <IconSquareArrowUpRight
                        width={16}
                        height={16}
                        className="ms-2"
                      />
                    </a>
                  </p>
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
