const selectedElements = [
    "Li", "Be", "Na", "Mg", "K", "Ca", "Rb", "Sr", "Cs", "Ba", "Fr", "Ra",
    "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ru", "Pd", "Ag", "Cd", "Hg",
    "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "As", "Se", "Br", "Kr", "Sb", "Te", "I", "Xe", "At", "Rn",
    "La", "Ce", "Pr", "Nd", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"
];

const generateButton = document.getElementById('generate');
const drawButton = document.getElementById('draw');
const resetButton = document.getElementById('reset');
const bingoCard = document.getElementById('bingo-card');
const drawnElement = document.getElementById('drawn-element');
const drawnElements = document.getElementById('drawn-elements');
const drawSection = document.getElementById('draw-section');
let drawnList = [];

generateButton.addEventListener('click', generateBingoCard);
drawButton.addEventListener('click', drawElement);
resetButton.addEventListener('click', resetGame);

function generateBingoCard() {
    bingoCard.innerHTML = '';
    const cardElements = shuffleArray(selectedElements).slice(0, 24);
    cardElements.splice(12, 0, 'Free');  // Add "Free" space in the center

    cardElements.forEach((el, index) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = el;
        cell.addEventListener('click', () => cell.classList.toggle('marked'));
        bingoCard.appendChild(cell);
    });

    // Hide the draw section for students
    drawSection.style.display = 'none';
}

function drawElement() {
    const randomElement = selectedElements[Math.floor(Math.random() * selectedElements.length)];
    drawnList.push(randomElement);
    drawnElement.innerText = randomElement;
    drawnElements.innerHTML = `Drawn Elements: ${drawnList.join(', ')}`;
}

function resetGame() {
    drawnList = [];
    drawnElement.innerText = '';
    drawnElements.innerHTML = '';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
