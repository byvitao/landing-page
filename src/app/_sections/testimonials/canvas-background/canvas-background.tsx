"use client";
import { useEffect, useRef } from "react";

type SvgItem = {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
}
const DENSITY = 25000;
const SIZE = {
  base: 40,
  multiplier: 25,
}
const SPEED = {
  base: .2,
  multiplier: .4,
}
const ROTATION = .004;

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const items = useRef<SvgItem[]>([]);
  const svgImage = useRef<HTMLImageElement | null>(null);
  const lastWidth = useRef(0);
  const lastHeight = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const svg = new Image();
    svg.src = "/svgs/speech-bubble.svg";
    svg.onload = () => {
      svgImage.current = svg;
      animate();
    }

    function resize(width: number, height: number) {
      canvas.width = width;
      canvas.height = height;
      generateItems();
    }

    function generateItems() {
      const area = canvas.width * canvas.height;
      const count = Math.floor(area / DENSITY);

      items.current = new Array(count).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: SIZE.base + Math.random() * SIZE.multiplier,
        speed: SPEED.base + Math.random() * SPEED.multiplier,
        rotation: Math.random() * Math.PI,
      }));
    }

    function drawSvg(ctx: CanvasRenderingContext2D, item: SvgItem) {
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.rotate(item.rotation);

      const img = svgImage.current!;
      const aspect = img.width / img.height;
      const width = item.size / aspect;
      const height = item.size;

      ctx.drawImage(img, -width / 2, -height / 2, width, height);
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const item of items.current) {
        item.y += item.speed;

        if (item.y > canvas.height + 50) {
          item.y = -50;
          item.x = Math.random() * canvas.width;
        }

        item.rotation += ROTATION;

        drawSvg(ctx, item);
      }

      requestAnimationFrame(animate);
    }

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width === lastWidth.current && height === lastHeight.current)
        return;

      lastWidth.current = width;
      lastHeight.current = height;
      resize(width, height);
    });

    ro.observe(canvas);
    return () => ro.disconnect();

  }, []);

  return (
    <canvas ref={canvasRef} />
  );
}