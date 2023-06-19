const container = document.getElementById('container');
for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.classList.add('div');
    container.appendChild(div);
}

