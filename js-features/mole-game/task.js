let victories = 0;
let defeats = 0;
const maxVictories = 10;
const maxDefeats = 5;

const handleHoleClick = (index) => {
  const holeElement = document.getElementById(`hole${index}`);
  
  holeElement.onclick = () => {
    if (holeElement.classList.contains('hole_has-mole')) {
      victories++;

      if (victories >= maxVictories) {
        alert('Победа!');
        resetGame();
      }
    } else {
      defeats++;

      if (defeats >= maxDefeats) {
        alert('Game over!');
        resetGame();
      }
    }

    updateGameStatus();
  };
};

for (let i = 1; i <= 9; i++) {
  handleHoleClick(i);
}

const updateGameStatus = () => {
    const deadDisplay = document.getElementById('dead');
    const lostDisplay = document.getElementById('lost');
    deadDisplay.textContent = `${victories}`;
    lostDisplay.textContent = `${defeats}`;
};

const resetGame = () => {
  victories = 0;
  defeats = 0;
  updateGameStatus();
};

updateGameStatus();
