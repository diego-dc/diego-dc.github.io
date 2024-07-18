"use client"

import { useGSAP } from "@gsap/react";
import React from "react"
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const AboutDraggable = () => {

    useGSAP (() => {

        Draggable.create(".dragItem", {
            bounds: document.getElementById("containerDraggable"),
            inertia: true,
          });
        
    });

    return (
        <div id="containerDraggable min-h-screen" className="container">
            <div className="dragItem h-[100px] w-[100px] border">

            </div>

        </div>
    );
};

export default AboutDraggable;
