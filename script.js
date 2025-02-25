const container = document.querySelector('.container')
let size

// create a size x size grid
function createGrid(size) {
    const sideLength = computeCellSideLength(size)
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const cell = document.createElement('div')
            cell.style.height = `${sideLength}px`;
            cell.style.width = `${sideLength}px`;;
            cell.style.border = '1px solid black';
            cell.style.boxSizing = 'border-box';
            cell.addEventListener('mouseenter', (e) => changeCellToRandomColor(e))
            cell.addEventListener('mouseleave', (e) => changeCellToRandomColor(e))
            container.appendChild(cell)
        }
    }
}
function changeCellToRandomColor(event) {
    event.target.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function computeCellSideLength(size) {
    return Math.floor(900 / size)
}

function removeGridFromContainer() {
    container.innerHTML = ''
}

function alertUserToEnterSize() {
    size = prompt("Please enter the grid size (from 0-100):")
    if (size > 100 || size < 0) {
        alert(`Please enter a size between 0 and 100! You entered ${size}!`)
        return
    }
    removeGridFromContainer()
    createGrid(size)
}

function resetGrid() {
    removeGridFromContainer()
    createGrid(size)
}

createGrid(16)