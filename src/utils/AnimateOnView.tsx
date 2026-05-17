"use client";

import { useEffect } from "react";

const THRESHOLDS: Record<string, { mobile: number; desktop: number }> = {
  default: { mobile: 0.7, desktop: 0.1 },
  process: { mobile: 0.2, desktop: 0.1 },
  location: { mobile: 0.2, desktop: 0.1 },
};

export function AnimateOnView() {
  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse) and (hover: none)").matches;
    const observers: IntersectionObserver[] = [];

    function observe(el: HTMLElement) {
      const key = el.dataset.animate || "default";
      const config = THRESHOLDS[key] ?? THRESHOLDS.default;
      const threshold = isMobile ? config.mobile : config.desktop;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("isVisible");
          } else {
            el.classList.remove("isVisible");
          }
        },
        { threshold }
      );

      observer.observe(el);
      observers.push(observer);
    }

    // Elementos já no DOM
    document.querySelectorAll<HTMLElement>("[data-animate]").forEach(observe);

    // Elementos que aparecem depois (Client Components)
    const mutation = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.dataset.animate !== undefined) {
            observe(node);
          }

          node.querySelectorAll<HTMLElement>("[data-animate]").forEach(observe);
        });
      });
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      mutation.disconnect();
    };
  }, []);

  return null;
}