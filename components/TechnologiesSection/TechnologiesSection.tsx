"use react"

import React from "react"
import Image from 'next/image'
import "./TechnologiesSection.css"

const TechnologiesSection = () => {

    return (
        <div className="container flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-6xl">
                    Some of the techs i like to 
                </h2>
                <h2 className="text-6xl text-[var(--color-highlight)]">work with</h2>
            </div>
            <div className="relative flex flex-col gap-0 justify-center items-center">
                <div className="scroll-line-static-top top-0" style={{ height: `9rem`}}></div>
                <div className="w-100 xl:w-[85%] bg-[rgb(16,16,16,0.25)] border border-[var(--color-light)] p-12">
                    <div className="grid grid-cols-5 gap-12">
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="CSS"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/css-3.svg"}
                                title="CSS"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="Python"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/python-5.svg"}
                                title="Python"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="Javascript"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/logo-javascript.svg"}
                                title="Javascript"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="React"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/react-2.svg"}
                                title="React"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="Django"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/django.svg"}
                                title="Django"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="Tailwind"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/tailwind-css-1.svg"}
                                title="Tailwind"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="Bootstrap"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/bootstrap-5.svg"}
                                title="Bootstrap"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="GSAP"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%'}}
                                src={"/img/logos/gsap-greensock.svg"}
                                title="GSAP"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="Angular"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%'}}
                                src={"/img/logos/angular.svg"}
                                title="Angular"
                            >
                            </Image>
                        </div>
                        <div className="h-14 w-full flex items-center justify-center">
                            <Image 
                                alt="NodeJs"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%'}}
                                src={"/img/logos/nodejs.svg"}
                                title="NodeJs"
                            >
                            </Image>
                        </div>
                        
                    </div>
                </div>
                <div className="scroll-line-static-bottom top-0" style={{ height: `9rem`}}></div>
            </div>
        </div>
    );
};

export default TechnologiesSection