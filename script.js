gsap.registerPlugin(ScrollTrigger);

gsap.to(".femme",{
    y: 200,
    ease: "power1.Out",
    scrollTrigger: {
        trigger: ".image-container",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});