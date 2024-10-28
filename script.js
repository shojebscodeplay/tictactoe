let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let turn0 = true; // Track whose turn it is
let winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left-to-right diagonal
    [2, 4, 6]  // Right-to-left diagonal
];

// Function to check for a winner (as previously discussed)
let checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== '' && pos1 === pos2 && pos1 === pos3) {
            console.log(`Winner is: ${pos1}`);
            alert(`Winner is: ${pos1}`);
            disableAllBoxes();
            return;
        }
    }

    if (Array.from(boxes).every(box => box.innerText === 'X' || box.innerText === 'O')) {
        console.log("It's a draw!");
        alert("It's a draw!");
    }
};

// Function to disable all boxes
let disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

// Function to reset the game
let resetGame = () => {
    boxes.forEach(box => {
        box.innerText = ''; // Clear the text
        box.style.backgroundColor = ''; // Clear the background color
        box.disabled = false; // Enable the boxes for the new game
    });
    turn0 = true; // Reset to the first player
};

// Add event listeners for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = 'red';
            box.style.color = 'white';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Add event listener for the reset button
resetButton.addEventListener("click", resetGame);
