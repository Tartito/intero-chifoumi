
let score = 0;

function playerChoice(choice) {
    const playerZone = document.getElementById('playerChoice');
    const computerZone = document.getElementById('computerChoice');
    const scoreZone = document.getElementById('score');

    let playerSelection = '';
    let playerImage = '';
    switch (choice) {
        case 1:
            playerSelection = 'Pierre';
            playerImage = 'pierre.webp';
            break;
        case 2:
            playerSelection = 'Feuille';
            playerImage = 'feuille.jpg';
            break;
        case 3:
            playerSelection = 'Ciseaux';
            playerImage = 'ciseaux.jpg';
            break;
    }
    playerZone.style.backgroundImage = `url(${playerImage})`;
    playerZone.textContent = playerSelection;

    // Choix aléatoire de l'ordinateur
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerSelection = '';
    let computerImage = '';
    switch (computerChoice) {
        case 1:
            computerSelection = 'Pierre';
            computerImage = 'pierre.webp';
            break;
        case 2:
            computerSelection = 'Feuille';
            computerImage = 'feuille.jpg';
            break;
        case 3:
            computerSelection = 'Ciseaux';
            computerImage = 'ciseaux.jpg';
            break;
    }
    computerZone.style.backgroundImage = `url(${computerImage})`;
    computerZone.textContent = computerSelection;

    // Calcul du score
    let result = calculateResult(choice, computerChoice);
    scoreZone.textContent = 'Score: ' + score;

    if (result === 1) {
        score++;
        alert('Vous avez gagné !');
    } else if (result === -1) {
        score--;
        alert('Vous avez perdu !');
    } else {
        alert('Égalité !');
    }
}

function calculateResult(player, computer) {
    if (player === computer) {
        return 0; // Égalité
    }
    if (
        (player === 1 && computer === 3) || // Pierre gagne Ciseaux
        (player === 2 && computer === 1) || // Feuille gagne Pierre
        (player === 3 && computer === 2)    // Ciseaux gagne Feuille
    ) {
        return 1; // Victoire de l'utilisateur
    }
    return -1; // Victoire de l'ordinateur
}

function resetGame() {
    // Réinitialisation du jeu
    document.getElementById('playerChoice').style.backgroundImage = '';
    document.getElementById('computerChoice').style.backgroundImage = '';
    document.getElementById('playerChoice').textContent = '';
    document.getElementById('computerChoice').textContent = '';
    document.getElementById('score').textContent = 'Score: 0';
    score = 0;
}




