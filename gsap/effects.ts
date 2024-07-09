// src/gsap/effects.ts
import gsap from 'gsap';


gsap.registerEffect({
    name: "fadeIn",
    effect: (targets: gsap.TweenTarget, config: { duration: number }) => {
        return gsap.to(targets, { duration: config.duration, opacity: 1 }); 
    },
    defaults: { duration: 3 },
    extendTimeline: true,
});
