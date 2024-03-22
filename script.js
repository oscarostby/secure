var popupCount = 1; // Tellervariabel for å holde styr på antall popuper
var popupInterval; // Variabel for setInterval

function openPopup() {
    var copiedPage = window.open('', 'popupWindow' + popupCount, 'width=600,height=400');

    var popupContent = "<!DOCTYPE html>";
    popupContent += "<html lang='en'>";
    popupContent += "<head>";
    popupContent += "<meta charset='UTF-8'>";
    popupContent += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    popupContent += "<title>Copied Page</title>";
    popupContent += "</head>";
    popupContent += "<body>";
    popupContent += "<h1>Hei!</h1>";
    popupContent += "<p>Dette er innholdet på popup-siden " + popupCount + ".</p>";
    popupContent += "<script>var audio = new Audio('vid.mp3'); audio.play();</script>";
    popupContent += "</body>";
    popupContent += "</html>";

    copiedPage.document.write(popupContent);
    copiedPage.document.close();

    popupCount++; // Øk telleren for neste popup
}

function startPopupLoop() {
    document.getElementById('popupButton').style.display = 'none';

    openPopup(); // Åpne det første popup-vinduet umiddelbart

    popupInterval = setInterval(openPopup, 1000); // Start en løkke med åpning av popup-vinduer hvert 1 sekund
}

window.onload = function() {
    var audio = new Audio('vid.mp3');
    audio.play(); // Spill av lyden
};
