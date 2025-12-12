document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    const inputA = document.getElementById('nombre-a');
    const inputB = document.getElementById('nombre-b');
    const operationSelect = document.getElementById('operation');
    const errorMessageDiv = document.getElementById('error-message');
    const historyList = document.getElementById('history-list');

    // Tableau JS pour stocker l'historique
    let history = [];

    // Événement sur la soumission du formulaire
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi du formulaire standard
        
        // 1. Récupération des valeurs
        const valA = parseFloat(inputA.value);
        const valB = parseFloat(inputB.value);
        const operation = operationSelect.value;
        
        // Effacer les messages d'erreur précédents
        clearError();

        // 2. Validation des données
        if (isNaN(valA) || isNaN(valB) || inputA.value.trim() === "" || inputB.value.trim() === "") {
            displayError("Veuillez entrer des nombres valides dans les deux champs.");
            return;
        }

        // 3. Interdire la division par zéro
        if (operation === 'divide' && valB === 0) {
            displayError("Erreur : Division par zéro impossible.");
            return;
        }

        // 4. Effectuer le calcul
        let result;
        let operationSymbol;

        switch (operation) {
            case 'plus':
                result = valA + valB;
                operationSymbol = '+';
                break;
            case 'minus':
                result = valA - valB;
                operationSymbol = '−';
                break;
            case 'times':
                result = valA * valB;
                operationSymbol = '×';
                break;
            case 'divide':
                result = valA / valB;
                operationSymbol = '÷';
                break;
            default:
                displayError("Opération non reconnue.");
                return;
        }

        // Arrondir le résultat à 2 décimales pour l'affichage si nécessaire
        result = Math.round(result * 100) / 100;

        // Créer l'opération pour l'historique
        const operationString = `${valA} ${operationSymbol} ${valB} = ${result}`;

        // 5. Ajout de l'opération dans le tableau JS
        history.push(operationString);
        
        // Mettre à jour l'affichage de l'historique
        updateHistoryDisplay();
        
        // Afficher le résultat dans la zone d'erreur (temporairement)
        // Vous pouvez aussi ajouter un champ de résultat dans le HTML pour un affichage dédié.
        displayError(`Résultat : ${result}`, false); 
        
        // Optionnel : Réinitialiser les champs
        // inputA.value = '';
        // inputB.value = '';
    });


    // Fonction d'affichage dynamique des erreurs/messages
    function displayError(message, isError = true) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
        // Changer la couleur/style si ce n'est pas une erreur (ex: afficher le résultat)
        if (isError) {
            errorMessageDiv.style.backgroundColor = '#f8d7da'; // Couleur erreur
            errorMessageDiv.style.color = 'var(--error-color)';
        } else {
            errorMessageDiv.style.backgroundColor = '#d4edda'; // Couleur succès/résultat
            errorMessageDiv.style.color = '#155724';
        }
    }

    // Fonction pour effacer le message d'erreur
    function clearError() {
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
    }

    // 6. Mise à jour de la section "Historique"
    function updateHistoryDisplay() {
        // Vider l'historique actuel dans le DOM
        historyList.innerHTML = ''; 

        // Parcourir le tableau `history` et créer des éléments <li>
        // On affiche les plus récentes en premier (du plus récent au plus ancien)
        [...history].reverse().forEach(op => {
            const listItem = document.createElement('li');
            listItem.textContent = op;
            historyList.appendChild(listItem);
        });
    }

    // Au chargement, assurez-vous que l'historique est vide/initialisé
    updateHistoryDisplay();
});