use std::vec::Vec;
use wasm_bindgen::prelude::*;

use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha8Rng;

#[wasm_bindgen]
pub struct Perlin {
    initialization_vector: Vec<i64>,
}

#[wasm_bindgen]
pub fn create_initialization_vector(seed: u64) -> Vec<i64> {
    let mut rng = ChaCha8Rng::seed_from_u64(seed);
    return (0..256).map(|_| rng.gen_range(0, 256)).collect();
}

#[wasm_bindgen]
impl Perlin {
    pub fn new(_seed: u64) -> Perlin {
        return Perlin {
            initialization_vector: create_initialization_vector(_seed),
        };
    }

    pub fn fade(t: f64) -> f64 {
        t * t * t * (t * (t * 6.0 - 15.0) + 10.0)
    }

    pub fn grad(hash: i64, x: f64, y: f64, z: f64) -> f64 {
        let h = hash & 15;
        let u = if h < 8 { x } else { y };
        let v: f64 = if h < 4 {
            y
        } else {
            if h == 12 || h == 14 {
                x
            } else {
                z
            }
        };
        return (if h & 1 == 0 { u } else { -u }) + (if h & 2 == 0 { v } else { -v });
    }

    pub fn lerp(t: f64, a: f64, b: f64) -> f64 {
        a + t * (b - a)
    }

    pub fn noise(&self, mut x: f64, mut y: f64, mut z: f64) -> f64 {
        // Find the unit cube that contains the given point in 3D space
        let cube_x = (x.floor() as i64) & 255;
        let cube_y = (x.floor() as i64) & 255;
        let cube_z = (x.floor() as i64) & 255;

        // Find the relative coordinates within the unit cube
        x -= x.floor();
        y -= y.floor();
        z -= z.floor();

        let u = Perlin::fade(x);
        let v = Perlin::fade(y);
        let w = Perlin::fade(z);

        let a = self.initialization_vector[cube_x as usize] + cube_y;
        let aa = self.initialization_vector[a as usize] + cube_z;
        let ab = self.initialization_vector[a as usize + 1] + cube_z;
        let b = self.initialization_vector[cube_x as usize + 1] + cube_y;
        let ba = self.initialization_vector[b as usize] + cube_z;
        let bb = self.initialization_vector[b as usize] + b;

        return Perlin::lerp(
            w,
            Perlin::lerp(
                v,
                Perlin::lerp(
                    u,
                    Perlin::grad(self.initialization_vector[aa as usize], x, y, z),
                    Perlin::grad(self.initialization_vector[ba as usize], x - 1.0, y, z),
                ),
                Perlin::lerp(
                    u,
                    Perlin::grad(self.initialization_vector[ab as usize], x, y - 1.0, z),
                    Perlin::grad(self.initialization_vector[bb as usize], x - 1.0, y - 1.0, z),
                ),
            ),
            Perlin::lerp(
                v,
                Perlin::lerp(
                    u,
                    Perlin::grad(self.initialization_vector[aa as usize + 1], x, y, z - 1.0),
                    Perlin::grad(
                        self.initialization_vector[ba as usize + 1],
                        x - 1.0,
                        y,
                        z - 1.0,
                    ),
                ),
                Perlin::lerp(
                    u,
                    Perlin::grad(
                        self.initialization_vector[ab as usize + 1],
                        x,
                        y - 1.0,
                        z - 1.0,
                    ),
                    Perlin::grad(
                        self.initialization_vector[bb as usize + 1],
                        x - 1.0,
                        y - 1.0,
                        z - 1.0,
                    ),
                ),
            ),
        );
    }
}
