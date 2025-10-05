"use client";

import React from "react";
import { gsap } from "gsap";
import "../../../gsap/effects";
import { useGSAP } from "@gsap/react";
import "./KCLPThumbnail.css";
import Image from "next/image";

interface CustomCSSProperties extends React.CSSProperties {
  "--quantity"?: number;
  "--position"?: number;
}

const KCLPThumbnail = () => {
  useGSAP(() => {
    const masterTimeline = gsap.timeline();

    masterTimeline.from(".title", {
      opacity: 0,
      y: 150,
      duration: 3,
    });

    masterTimeline.from(
      ".imageSlider",
      {
        opacity: 0,
        y: -150,
        stagger: 0.2,
        duration: 4,
      },
      "-=3",
    );

    masterTimeline.from(
      ".promotionSection",
      {
        opacity: 0,
        x: 150,
        stagger: 0.2,
        duration: 3,
      },
      "-=2",
    );
  }, []);

  return (
    <div className="banner">
      <div className="imageSlider">
        <div
          className="slider"
          style={{ "--quantity": 10 } as CustomCSSProperties}
        >
          <div
            className="item"
            style={{ "--position": 1 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_01.JPG"
              alt="KCLP.ART digital art piece 1"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_02.PNG"
              alt="KCLP.ART digital art piece 2"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_03.JPG"
              alt="KCLP.ART digital art piece 3"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_04.JPG"
              alt="KCLP.ART digital art piece 4"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 5 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_05.JPG"
              alt="KCLP.ART digital art piece 5"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 6 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_06.JPG"
              alt="KCLP.ART digital art piece 6"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 7 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_07.JPG"
              alt="KCLP.ART digital art piece 7"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 8 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_08.JPG"
              alt="KCLP.ART digital art piece 8"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 9 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_09.JPG"
              alt="KCLP.ART digital art piece 9"
              fill={true}
              className="img-item"
            />
          </div>
          <div
            className="item"
            style={{ "--position": 10 } as CustomCSSProperties}
          >
            <Image
              src="/img/IMG_10.JPG"
              alt="KCLP.ART digital art piece 10"
              fill={true}
              className="img-item"
            />
          </div>
        </div>
      </div>
      <div className="content title">
        <h1 data-content="KCLP.ART">KCLP.ART</h1>
        <div className="model kl"></div>
      </div>
      <div className="promotionSection">
        <div className="flex flex-col">
          <a
            href="https://www.instagram.com/kclp.art/"
            target="_blank"
            className=" flex flex-col gap-3 lg:gap-6 kclp-link transition-all justify-center items-center"
          >
            <h1 className="md:hidden lg:block">Follow me on Instagram!</h1>
            <h1 className="hidden md:block lg:hidden">Follow me!</h1>
            <Image
              src="/img/logos/Logo_KCLP_White.svg"
              alt="KCLP.ART logo - Follow on Instagram"
              className="img-item"
              width={125}
              height={125}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KCLPThumbnail;
