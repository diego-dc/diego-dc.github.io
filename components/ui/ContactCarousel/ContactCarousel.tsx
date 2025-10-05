"use client";

import React, { useState } from "react";
import { gsap } from "gsap";
import "./ContactCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconMail from "@/components/icons/IconMail";
import IconGithub from "@/components/icons/IconGithub";

const ContactCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (swiper: SwiperType, index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      swiper.slideTo(index);
    }
  };

  const handleSlideClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const target = e.target as HTMLElement;
    const swiperElement = target.closest(".swiper");

    if (swiperElement) {
      const swiperInstance = (
        swiperElement as unknown as { swiper: SwiperType }
      ).swiper;
      handleClick(swiperInstance, index);
    }
  };

  useGSAP(() => {
    const titles = gsap.utils.toArray<HTMLElement>(".contactTitle");

    if (titles.length > 0) {
      titles.forEach((title) => {
        const splitTitle = new SplitTextJS(title);

        gsap.from(splitTitle.chars, {
          opacity: 0,
          x: -10,
          strokeOpacity: 0,
          stagger: 0.5,
          duration: 3,
          scrollTrigger: {
            trigger: ".contact-container",
            start: "top 100%",
            end: "top 75%",
            toggleActions: "play none reverse none",
            scrub: 5,
          },
        });
      });
    }

    gsap.from(".swiper-container", {
      opacity: 0,
      y: 1000,
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 100%",
        end: "top 75%",
        toggleActions: "play none reverse none",
        scrub: 10,
      },
    });
  }, []);

  return (
    <>
      <div className="absolute relative bottom-0 flex flex-col items-center w-full gap-8 overflow-hidden contact-container">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl contactTitle">
          Let&apos;s get in touch!
        </div>
        <div className="h-[314px] sm:h-[364px] md:h-[414px] lg:h-[514px] xl:[614px] w-full flex flex-col gap-8 relative overflow-hidden items-center swiper-container">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper bottom-[-75px]"
            initialSlide={1}
            cardsEffect={{
              perSlideOffset: 50,
              perSlideRotate: 5,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide
              className={activeIndex === 0 ? "active-slide" : ""}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                handleSlideClick(e, 0)
              }
            >
              <a
                href="https://linkedin.com/in/diego-caviedes-aguirre-022b6b225"
                target="_blank"
                onClick={(e) => activeIndex !== 0 && e.preventDefault()}
              >
                <div className="flex flex-col items-center w-full h-full gap-8 p-8 md:gap-6">
                  <div className="text-3xl font-bold">Linkedin</div>
                  <IconLinkedin className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 xl:w-64 xl:h-64" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide
              className={activeIndex === 1 ? "active-slide" : ""}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                handleSlideClick(e, 1)
              }
            >
              <a
                href="mailto:diegcavi21@gmail.com"
                onClick={(e) => activeIndex !== 1 && e.preventDefault()}
              >
                <div className="flex flex-col items-center w-full h-full gap-8 p-8 md:gap-6">
                  <div className="text-3xl font-bold">Email</div>
                  <IconMail className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 xl:w-64 xl:h-64" />
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide
              className={activeIndex === 2 ? "active-slide" : ""}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                handleSlideClick(e, 2)
              }
            >
              <a
                href="https://github.com/diego-dc"
                target="_blank"
                onClick={(e) => activeIndex !== 2 && e.preventDefault()}
              >
                <div className="flex flex-col items-center w-full h-full gap-8 p-8 md:gap-6">
                  <div className="text-3xl font-bold">Github</div>
                  <IconGithub className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 xl:w-64 xl:h-64" />
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ContactCarousel;
