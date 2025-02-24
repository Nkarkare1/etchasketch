const container = document.querySelector('.container')
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const cell = document.createElement('div')
        // cell.textContent = `cell_${i}_${j}`
        cell.style.height = '50px';
        cell.style.width = '50px';
        cell.addEventListener('mouseenter', (e) => changeCellToRandomColor(e))
        container.appendChild(cell)
    }
}

function changeCellToRandomColor(event) {
    event.target.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }