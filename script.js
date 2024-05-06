var map = L.map('map').setView([-34.547303588817826, -55.50233092972566], 9);
var shaolinPin = L.icon({
    iconUrl: './Img/Shaolin pin.png',

    iconSize:     [65, 95],
    iconAnchor:   [30, 94],
    popupAnchor:  [2, -79]
});



L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=th1B7ltIffQzw1VZAQcG', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

function getData() {
    const response = fetch('./locales.json')
        .then(response => response.json())
        .then(data => createMarker(data))
}

function createMarker(data) {
    data["locales"].forEach(object => {
        L.marker([object.latitud, object.longitud],{icon: shaolinPin}).addTo(map).bindPopup(object.lugar + "<br>" + object.profesor + "<br><a href='https://api.whatsapp.com/send?phone=" + object.numero + "&text=Hola, quisiera averiguar sobre las clases de "+ object.disciplina +"'>Whatsapp</a>" +"<br><a href='"+ object.link + "'>Ver en maps</a>");
    });

}

document.addEventListener("DOMContentLoaded", () => {
    getData()
})