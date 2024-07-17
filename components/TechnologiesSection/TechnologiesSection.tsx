"use react"

import React from "react"

const TechnologiesSection = () => {

    return (
        <div className="container flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-6xl">
                    Some of the techs i like to 
                </h2>
                <h2 className="text-6xl text-[var(--color-highlight)]">work with</h2>
            </div>
            <div className="container bg-[rgb(16,16,16,0.25)] border border-[var(--color-light)] p-12">
                <div className="grid grid-cols-4 text-center gap-12">
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                    <div className="text-xl">Texto</div>
                </div>
            </div>  
        </div>
    );
};

export default TechnologiesSection