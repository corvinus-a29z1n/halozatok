var kérdések;
var kérdésSorszám = 0;

/*function letöltés() {
    fetch('questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data));
}*/

fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
);

/*function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}*/

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image != "") {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép").src = "";
    }
    
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
} 

/*function KérdésMegjelenítés(kérdésSzáma) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText

    if (kérdések[kérdésSzáma].image != "") {
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image;
    }
    else {
    kép.src = "";
    }

válasz1.innerText = kérdések[kérdésSzáma].answer1
válasz2.innerText = kérdések[kérdésSzáma].answer2
válasz3.innerText = kérdések[kérdésSzáma].answer3
}
*/
window.onload = () => {

    //letöltés();
    document.getElementById("vissza").onclick = () => {

        document.getElementById("válasz1").style.backgroundColor = "peachpuff";
        document.getElementById("válasz2").style.backgroundColor = "peachpuff";
        document.getElementById("válasz3").style.backgroundColor = "peachpuff";

        document.getElementById("válasz1").style.pointerEvents = 'auto';
        document.getElementById("válasz2").style.pointerEvents = 'auto';
        document.getElementById("válasz3").style.pointerEvents = 'auto';

        if (kérdésSorszám == 0) {
            kérdésSorszám = kérdések.length - 1
            kérdésMegjelenítés(kérdésSorszám);
        }
        else {
            kérdésMegjelenítés(--kérdésSorszám);
        }

    }

    document.getElementById("előre").onclick = () => {

        document.getElementById("válasz1").style.backgroundColor = "peachpuff";
        document.getElementById("válasz2").style.backgroundColor = "peachpuff";
        document.getElementById("válasz3").style.backgroundColor = "peachpuff";

        document.getElementById("válasz1").style.pointerEvents = 'auto';
        document.getElementById("válasz2").style.pointerEvents = 'auto';
        document.getElementById("válasz3").style.pointerEvents = 'auto';

        if (kérdésSorszám == kérdések.length - 1) {
            kérdésSorszám = 0;
            kérdésMegjelenítés(kérdésSorszám);
        }
        else {
            kérdésMegjelenítés(++kérdésSorszám);
        }

    }


    document.getElementById("válasz1").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }
}