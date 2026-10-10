import type { Img, L } from "../types";

export const img = (name: string, alt: L): Img => ({ src: `/images/${name}.webp`, alt });
