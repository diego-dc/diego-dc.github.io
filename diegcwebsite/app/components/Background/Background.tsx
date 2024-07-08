'use client'

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Background = () => {

    useEffect(() => {
        const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
        const tl2 = gsap.timeline({ repeat: -1, yoyo: true, delay: 0.5 }); // delay de 1 segundo
        const tl3 = gsap.timeline({ repeat: -1, yoyo: true, delay: 1 }); // delay de 2 segundos
        const tl4 = gsap.timeline({ repeat: -1, yoyo: true, delay: 0.1 }); // delay de 2 segundos

        tl1.to('.spotlight-top-right', { duration: 6, scale: 1.5 });
        tl2.to('.spotlight-top-left', { duration: 6, scale: 1.4 });
        tl3.to('.spotlight-bottom-left', { duration: 6, scale: 1.5 });
        tl4.to('.spotlight-bottom-right', { duration: 6, scale: 1.3 });
    }, []);

    return (

        <div className='absolute inset-0 z-1'>
            <div className="fixed aspect-square w-full hidden lg:block sm:w-3/4 md:w-10/12 lg:w-1/3 xl:min-h-[45%] xl:w-auto xl:min-w-[25%] -right-1/2 -top-8 sm:-right-1/4 sm:-top-20 lg:right-0 lg:top-0 spotlight-top-right">
                <div className="bg-[--color-secondary] size-full rounded-full opacity-75 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"></div>
            </div>
            <div className="fixed aspect-square w-full sm:w-3/4 md:w-10/12 lg:w-1/6 xl:min-h-[25%] xl:w-auto xl:min-w-[15%] -right-1/2 -top-8 sm:-right-1/4 sm:-top-20 lg:right-[55%] lg:top-0 spotlight-top-left">
                <div className="bg-[--color-highlight] size-full rounded-full opacity-35 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"></div>
            </div>
            <div className="fixed aspect-square w-full sm:w-3/4 md:w-10/12 lg:w-1/3 xl:min-h-[50%] xl:w-auto xl:min-w-[30%] -bottom-8 -left-1/2 sm:-bottom-20 sm:-left-1/4 lg:bottom-0 lg:left-0 spotlight-bottom-left">
                <div className="bg-[--color-secondary] size-full rounded-full opacity-75 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"></div>
            </div>
            <div className="fixed aspect-square w-full hidden lg:block sm:w-3/4 md:w-10/12 lg:w-1/6 xl:min-h-[30%] xl:w-auto xl:min-w-[20%] -bottom-8 -left-1/2 sm:-bottom-20 sm:-left-1/4 lg:bottom-0 lg:left-[55%] spotlight-bottom-right">
                <div className="bg-[--color-highlight] size-full rounded-full opacity-30 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"></div>
            </div>
        </div>
    );
};

export default Background;