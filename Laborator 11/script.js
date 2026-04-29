function calculeaza() {

    var nume = document.getElementById("nume").value;
    var varsta = Number(document.getElementById("varsta").value);
    var numarBilete = Number(document.getElementById("bilete").value);
    var pretBilet = Number(document.getElementById("pret").value);
    var animal = document.getElementById("animal").value;
    var doresteGhid = document.getElementById("ghid").checked;
    var tipVizita = "";
    var radioButtons = document.getElementsByName("vizita");
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            tipVizita = radioButtons[i].value;
        }
    }

    var mesaj = document.getElementById("mesaj").value;
    var costBilete = numarBilete * pretBilet;
    var costGhid = 0;
    if (doresteGhid === true) {
        costGhid = numarBilete * 10;
    }

    var costTotal = costBilete + costGhid;

    var esteMinor = varsta < 18;
    var mesajVarsta = "";
    if (esteMinor === true) {
        mesajVarsta = "minor";
    } else {
        mesajVarsta = "adult";
    }
    var mesajVizita = "";
    if (tipVizita === "Individuală") {
        mesajVizita = "Te așteptăm cu drag pentru o aventură solo!";
    } else if (tipVizita === "Familie") {
        mesajVizita = "Te așteptăm cu drag pentru o aventură alături de cei dragi!";
    } else {
        mesajVizita = "Te așteptăm cu drag pentru o aventură alături de cei dragi!";
    }

    var salut = "Bine ai venit, " + nume + "! Ne bucurăm că animalul tău preferat este " + animal + ".";

    var ghidText = "";
    if (doresteGhid === true) {
        ghidText = "Da, cu ghid (+10 lei/bilet)";
    } else {
        ghidText = "Nu, fără ghid";
    }

    var mesajFinal = salut + " " + mesajVizita;
    if (mesaj !== "") {
        mesajFinal = mesajFinal + " Notă suplimentară: " + mesaj;
    }

    var html = "";
    html += "<div class='rez-grid'>";
    html += "<div class='rez-card'>";
    html += "<span class='rez-label'>Vizitator</span>";
    html += "<span class='rez-valoare'>" + nume + "</span>";
    html += "</div>";
    html += "<div class='rez-card'>";
    html += "<span class='rez-label'>Vârstă</span>";
    html += "<span class='rez-valoare'>" + varsta + " ani – " + mesajVarsta + "</span>";
    html += "</div>";
    html += "<div class='rez-card'>";
    html += "<span class='rez-label'>Animal preferat</span>";
    html += "<span class='rez-valoare'>" + animal + "</span>";
    html += "</div>";
    html += "<div class='rez-card'>";
    html += "<span class='rez-label'>Tipul vizitei</span>";
    html += "<span class='rez-valoare'>" + tipVizita + "</span>";
    html += "</div>";
    html += "<div class='rez-card'>";
    html += "<span class='rez-label'>Ghid turistic</span>";
    html += "<span class='rez-valoare'>" + ghidText + "</span>";
    html += "</div>";
    html += "<div class='rez-card'>";
    html += "<span class='rez-label'>Bilete</span>";
    html += "<span class='rez-valoare'>" + numarBilete + " × " + pretBilet + " lei</span>";
    html += "</div>";
    html += "<div class='rez-card rez-total'>";
    html += "<span class='rez-label'>Cost total</span>";
    html += "<span class='rez-valoare'>" + costTotal + " lei</span>";
    html += "</div>";
    html += "</div>"; 
    html += "<div class='rez-mesaj'>" + mesajFinal + "</div>";

    document.getElementById("rezultate-continut").innerHTML = html;
    document.getElementById("rezultate").style.display = "block";
    document.getElementById("rezultate").scrollIntoView({ behavior: "smooth" });
}

function reset() {
    document.getElementById("nume").value = "";
    document.getElementById("varsta").value = "";
    document.getElementById("bilete").value = "";
    document.getElementById("pret").value = "";
    document.getElementById("animal").value = "";
    document.getElementById("ghid").checked = false;
    document.getElementById("mesaj").value = "";

    var radioButtons = document.getElementsByName("vizita");
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }

    document.getElementById("rezultate").style.display = "none";
    document.getElementById("rezultate-continut").innerHTML = "";
}
