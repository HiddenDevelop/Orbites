import { useRef } from "react";
import type { FoodType, ThinkingState } from "../core/types";
import { strawberryPoints } from "../foods/strawberry/config";
import { useAnimationFrame } from "../hooks/useAnimationFrame";

type ThinkingFoodProps = {
  food: FoodType;
  state: ThinkingState;
  size?: number;
};

export function ThinkingFood({
  food,
  state,
  size = 120,
}: ThinkingFoodProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((time) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, size, size);

    if (food !== "strawberry") return;

    const scale = size / 100;

    strawberryPoints.forEach((point, index) => {
      const phase = index * 0.35;

      const pulse =
        state === "thinking"
          ? Math.sin(time * 0.003 + phase) * 2
          : 0;

      const x = point.x * scale;
      const y = (point.y + pulse) * scale;

      const radius =
        (point.radius ?? 4) *
        scale *
        (1 + Math.sin(time * 0.0025 + phase) * 0.08);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);

      const isLeaf = index < 3;

      ctx.fillStyle = isLeaf ? "#55c271" : "#ff5d73";
      ctx.fill();
    });
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}