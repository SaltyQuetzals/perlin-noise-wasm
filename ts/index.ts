import("../pkg/index.js").then((wasm) => {
    const drawCells = () => {
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;

        let z = Math.floor(Math.random() * 10000);
        const canvas = document.getElementById("perlin-noise-canvas") as HTMLCanvasElement;
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.width = `${WIDTH}px`;
        canvas.style.height = `${HEIGHT}px`;
        const contextType = '2d';
        const ctx = canvas.getContext(contextType);
        if (!ctx) {
            throw new Error(`"${contextType}" is not a valid rendering context.`)
        }
        wasm.draw(ctx, canvas.width, canvas.height, z);
    };

    drawCells();


    window.onresize = drawCells;
}).catch(console.error);
