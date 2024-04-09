/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/
let inputEcriture = document.getElementById("inputEcriture"), boutonValidation=document.getElementById("btnValiderMot");
let zoneProposition = document.querySelector(".zoneProposition"), zoneScore = document.querySelector(".zoneScore");
let listeInputRadio = document.querySelectorAll(".optionSource input");
console.log(inputEcriture,boutonValidation,zoneProposition,zoneScore,listeInputRadio)
lancerJeu()
