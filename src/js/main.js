
/* Variabler för redan existerande element */
const mainDivElement = document.getElementById("maincontentdiv");

/* Vid fönsterstart */
window.onload(startUp);


/* Uppstartsfunktion */
function startUp() {
    let newElement = document.createElement("article")
    let newTextNode = document.createTextNode(clockMake())
    mainDivElement.appendChild(newElement);
    newElement.appendChild(newTextNode);
    console.log("I did stuff");
}

/*Klockfunktion*/
function clockMake() {
    let todayDate = new Date();
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
}