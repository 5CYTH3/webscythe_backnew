import gsap from 'gsap';

const TL = gsap.timeline({paused: true});

export function animateHeader(node) {
    console.log("Yo");
    TL.from(node, {top: -50, opacity: 0, ease: "power2.out", duration: 0.5}).play();
}