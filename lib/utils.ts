import { clsx, type ClassValue } from "clsx";

/**
 * Concatenate class names gracefully. Combines the power of `clsx` with
 * a simple join to avoid duplicates.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs.filter(Boolean));
}
