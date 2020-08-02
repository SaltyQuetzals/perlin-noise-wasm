import * as wasm from "wasm-perlin-noise";

const canvas = document.getElementById("perlin-noise-canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(`wasm.fill_canvas(${canvas.width}, ${canvas.height}, ${0}, ${BigInt(30)})`);
const result = wasm.fill_canvas(canvas.width, canvas.height, 0, BigInt(30));