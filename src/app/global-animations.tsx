"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function GlobalAnimations() {

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    let ro: ResizeObserver;

    mm.add({
      all: "(min-width: 0px)",
      isDesktop: "(min-width: 601px)",
    }, (context) => {
      let { isDesktop } = context.conditions as any;
      let smoother: ScrollSmoother | null = null;

      if (isDesktop) {
        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          speed: 1,
        });
      }

      ScrollTrigger.batch(".swiper", {
        onEnter: (elements) => elements.forEach((e: any) => e.swiper?.autoplay.start()),
        onLeave: (elements) => elements.forEach((e: any) => e.swiper?.autoplay.stop()),
        onEnterBack: (elements) => elements.forEach((e: any) => e.swiper?.autoplay.start()),
        onLeaveBack: (elements) => elements.forEach((e: any) => e.swiper?.autoplay.stop()),
        start: "top bottom",
        end: "bottom top",
      })

      const animateElement = (e: HTMLElement) => {
        if (e.dataset.gsapInit) return; // evita duplicar
        e.dataset.gsapInit = "true";

        gsap.from(e, {
          scrollTrigger: {
            trigger: e,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
          overwrite: "auto",
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach(animateElement);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;

            if (node.matches("[data-animate]")) animateElement(node);


            node.querySelectorAll<HTMLElement>("[data-animate]").forEach(animateElement);
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      const refreshAll = () => {
        ScrollTrigger.refresh();
        smoother?.refresh();
      }


      const content = document.querySelector("#smooth-content");
      if (content) {
        ro = new ResizeObserver(refreshAll);
        ro.observe(content);
      }

      window.addEventListener("load", refreshAll);
      window.addEventListener("pageshow", refreshAll);
      document.fonts.ready.then(refreshAll);

      const timeout = setTimeout(refreshAll, 500);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
        window.removeEventListener("load", refreshAll);
        window.removeEventListener("pageshow", refreshAll);
      };
    });

    return () => {
      if (ro) ro.disconnect();
      mm.revert();
    };

  }, []);

  return null;
}