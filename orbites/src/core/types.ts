export type ThinkingState =
  | "idle"
  | "thinking"
  | "searching"
  | "reasoning"
  | "success"
  | "error";

export type FoodType = "strawberry" | "donut";

export type Point = {
  x: number;
  y: number;
  radius?: number;
};
