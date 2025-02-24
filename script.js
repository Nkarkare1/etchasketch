const container = document.querySelector('.container')
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const cell = document.createElement('div')
        // cell.textContent = `cell_${i}_${j}`
        cell.style.height = '50px';
        cell.style.width = '50px';

        container.appendChild(cell)
    }
}