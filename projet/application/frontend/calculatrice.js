let affiche = '0';
let part1 = 0;
let part2 = 0;
let operation = '';

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

document.getElementById('bouton=').addEventListener('click',
    () => {
        part2 = Number(affiche);
        if (operation == 'addition'){
            console.log(part1 + part2);
            affiche = part1 + part2
            affiche.toString
            updateAffichage();
        }
        else if (operation == 'soustraction'){
            affiche = part1 - part2;
            affiche.toString;
            updateAffichage();
        }
        else if (operation == 'multiplication'){
            affiche = part1 * part2;
            affiche.toString;
            updateAffichage();
        }
        else if (operation == 'division'){
            if (part2 == 0){
                affiche = 'ERROR'
                updateAffichage();
            }
            else {
            affiche = part1 / part2;
            affiche.toString;
            updateAffichage();
            }
        }
    affiche = '0'
    }
)


function updateAffichage(){
    document.getElementById("resultat").innerText = affiche;
}