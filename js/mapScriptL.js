let apMap = L.map('apMap').setView([51.20484101324927, 4.444094458925736], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ'
}).addTo(apMap);


// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.20525581599223, 4.4440780248574745], [51.20453946990083, 4.444174281546585]];
// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(apMap);
// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.20484101324927, 4.444094458925736]).addTo(apMap);
apMarker.bindPopup("<b>domotica-systemen</b><br>Frans de Vriendtstraat 44, 2600 Antwerpen").openPopup();