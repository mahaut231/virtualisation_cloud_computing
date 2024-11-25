let affiche = '0';
let part1 = 0;
let part2 = 0;
let operation = '';
let stockageId = 0;
let afficheId = 0;

document.getElementById('bouton1').addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '1';
        }
        else{
            affiche = affiche + '1';
        }
        updateAffichage();
    }
)

document.getElementById("bouton2").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '2';
        }
        else{
            affiche = affiche + '2';
        }
        updateAffichage();
    }
)

document.getElementById("bouton3").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '3';
        }
        else{
            affiche = affiche + '3';
        }
        updateAffichage();
    }
)

document.getElementById("bouton4").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '4';
        }
        else{
            affiche = affiche + '4';
        }
        updateAffichage();
    }
)

document.getElementById("bouton5").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '5';
        }
        else{
            affiche = affiche + '5';
        }
        updateAffichage();
    }
)

document.getElementById("bouton6").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '6';
        }
        else{
            affiche = affiche + '6';
        }
        updateAffichage();
    }
)

document.getElementById("bouton7").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '7';
        }
        else{
            affiche = affiche + '7';
        }
        updateAffichage();
    }
)

document.getElementById("bouton8").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '8';
        }
        else{
            affiche = affiche + '8';
        }
        updateAffichage();
    }
)

document.getElementById("bouton9").addEventListener ('click', 
    () => {
        if (affiche == '0'){
            affiche = '9';
        }
        else{
            affiche = affiche + '9';
        }
        updateAffichage();
    }
)

document.getElementById("bouton0").addEventListener ('click', 
    () => {
        if(affiche == '0'){
            affiche = '0'
        }
        else{
            affiche = affiche + '0'; 
        }       
        updateAffichage();
    }
)

document.getElementById("boutonAnnuler").addEventListener ('click',
    () => {
        affiche = "0";
        part1 = 0;
        part2 = 0;
        updateAffichage();
    }   
)

document.getElementById("boutonPlus").addEventListener ('click',
    () => {

        part1 = Number(affiche);
        affiche = '0'; 
        operation = 'addition';
        updateAffichage();   
    }
)

document.getElementById("bouton-").addEventListener('click',
    () => {
        part1 = Number(affiche);
        affiche = '0';
        operation = 'soustraction';
        updateAffichage();
    }
)

document.getElementById("boutonMultiplier").addEventListener('click',
    () => {
        part1 = Number(affiche);
        affiche = '0';
        operation = 'multiplication';
        updateAffichage();
    }
)

document.getElementById("boutonDiviser").addEventListener('click',
    () => {
        part1 = Number(affiche);
        affiche = '0';
        operation = 'division';
        updateAffichage();
    }
)

document.getElementById('bouton=').addEventListener('click', async () => {
    part2 = Number(affiche);
    try {
        const id = await calculate(part1, part2, operation); 
        afficheId = id; 
        console.log(`ID de calcul généré : ${id}`);
        document.getElementById("idCalcul").innerText = `ID du calcul : ${id}`;
    } catch (error) {
        console.error('Erreur lors de la soumission du calcul :', error);
    }
    affiche = '0';  
});



document.getElementById('valider').addEventListener('click', async () => {
    stockageId = document.getElementById('demande').value;
    console.log(`ID soumis pour le résultat : ${stockageId}`);
    try {
        const result = await getResultById(stockageId); 
        affiche = result !== null ? result : 'Erreur';
        updateAffichage();
    } catch (error) {
        console.error('Erreur lors de la récupération du résultat :', error);
    }
    affiche = '0';
});




function updateAffichage(){
    document.getElementById("resultat").innerText = affiche;
}


async function calculate(number1, number2, operation) {

    try {
        const response =  await fetch('http://api-service:5000/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number1, number2, operation })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const jsonResponse =  await response.json(); // Lire le corps de la réponse une seule fois
        console.log(jsonResponse);
        console.log(jsonResponse.id);
        return jsonResponse.id;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
  


async function getResultById(resultId) {
    try {
        const response =  await fetch(`http://api-service:5000/api/result/${resultId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();

            // Retourne directement les données obtenues depuis l'API
            return data.result;
        } else {
            console.error('Erreur lors de la récupération du résultat');
            return null; // Retourne null en cas d'erreur
        }
    } catch (error) {
        console.error('Erreur:', error);
        return null; // Retourne null en cas d'exception
    }
}


