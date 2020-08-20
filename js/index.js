import("../pkg/index.js").then((wasm) => {
    const drawCells = () => {
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;

        let z = Math.floor(Math.random() * 256);
        /** @type {HTMLCanvasElement} */
        const canvas = document.getElementById("perlin-noise-canvas");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.width = `${WIDTH}px`;
        canvas.style.height = `${HEIGHT}px`;
        const ctx = canvas.getContext('2d');
        wasm.draw(ctx, canvas.width, canvas.height, z);
    };

    drawCells();


    window.onresize = drawCells;
}).catch(console.error);
