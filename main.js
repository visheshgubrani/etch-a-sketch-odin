const container = document.getElementById('container');
let isDrawing = false;

function startDrawing() {
    isDrawing = true;
}

function draw(event) {
    if (!isDrawing) return;

    const div = event.target;
    div.style.backgroundColor = 'black';
}

function stopDrawing() {
    isDrawing = false;
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        
        div.classList.add('div');
        container.appendChild(div);
        div.addEventListener('mousedown', startDrawing);
        div.addEventListener('mousemove', draw);
        div.addEventListener('mouseup', stopDrawing);
        

    }
    
}





