let playerScore = 0;
let computerScore = 0;

function playerChoice(choice) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const playerZone = document.getElementById('playerChoice');
    const computerZone = document.getElementById('computerChoice');

    let playerSelection = '';
    let playerImage = '';
    let computerSelection = '';
    let computerImage = '';

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

    playerZone.style.backgroundImage = `url(${playerImage})`;
    playerZone.textContent = playerSelection;
    computerZone.style.backgroundImage = `url(${computerImage})`;
    computerZone.textContent = computerSelection;

    // Calcul du score
    let result = calculateResult(choice, computerChoice);

    if (result === 1) {
        playerScore++;
        alert('Vous avez gagné !');
    } else if (result === -1) {
        computerScore++;
        alert('Vous avez perdu !');
    } else {
        alert('Égalité !');
    }

    // Mise à jour de l'affichage des scores
    document.getElementById('playerScore').textContent = 'Score Joueur: ' + playerScore;
    document.getElementById('computerScore').textContent = 'Score Ordinateur: ' + computerScore;
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
    const playerChoiceElem = document.getElementById('playerChoice');
    const computerChoiceElem = document.getElementById('computerChoice');
    const playerScoreElem = document.getElementById('playerScore');
    const computerScoreElem = document.getElementById('computerScore');

    if (playerChoiceElem && computerChoiceElem && playerScoreElem && computerScoreElem) {
        playerChoiceElem.style.backgroundImage = '';
        computerChoiceElem.style.backgroundImage = '';
        playerChoiceElem.textContent = '';
        computerChoiceElem.textContent = '';
        playerScoreElem.textContent = 'Score Joueur: 0';
        computerScoreElem.textContent = 'Score Ordinateur: 0';
        playerScore = 0;
        computerScore = 0;
    } else {
        console.error('Un ou plusieurs éléments DOM sont introuvables.');
    }
}