mod perlin;
mod utils;

use wasm_bindgen::prelude::*;


// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, perlin-noise!");
}

#[wasm_bindgen]
pub fn fill_canvas(width: usize, height: usize, z: usize, seed: u64) -> Vec<f64> {
    utils::set_panic_hook();
    let perlin = perlin::Perlin::new(seed);
    (0..width).flat_map(|x| {
        (0..height).map(|y| {
            perlin.noise(x as f64, y as f64, z as f64)
        }).collect::<Vec<f64>>()
    }).collect::<Vec<f64>>()
}
