const container = document.getElementById('container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'red';
        div.classList.add('div');
        container.appendChild(div);
    }
    
}

