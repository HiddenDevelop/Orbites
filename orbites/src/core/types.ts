export type ThinkingState =
  | "idle"
  | "thinking"
  | "searching"
  | "reasoning"
  | "success"
  | "error";

export type FoodType = "strawberry";

export type Point = {
  x: number;
  y: number;
  radius?: number;
};
