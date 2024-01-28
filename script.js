var map = L.map('map').setView([-34.547303588817826, -55.50233092972566], 9);

L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=th1B7ltIffQzw1VZAQcG', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);
var pinar = L.marker([-34.78717173604009, -55.89486317584626],).addTo(map).bindPopup("Mborayú - Espacio Biocéntrico <br> Profesor: Diego Correa <br><a href='https://maps.app.goo.gl/hefHT9xZ3zVFcFY27'>Ver en maps</a>");
var solymar = L.marker([-34.82516548301583, -55.962945784969556],).addTo(map).bindPopup("Gimnasio Centro Alquimia <br> Profesor: Diego Correa <br><a href='https://maps.app.goo.gl/sEnEC5qPvzwsXrHM8'>Ver en maps</a>");
var pinamar = L.marker([-34.78834722355707, -55.85262065324699],).addTo(map).bindPopup("El Club Pinamar <br> Profesor: Juanma de Tradicional y Moderno <br><a href='https://maps.app.goo.gl/y3HZoqdoFCfvsMVP7'>Ver en maps</a>");
var atlantida = L.marker([-34.76703757055167, -55.763955990327986],).addTo(map).bindPopup("Shaolin Chuan <br> Profesor: Shifu Daniel Bogado <br><a href='https://maps.app.goo.gl/Za8q6SkZLaEq76zX6'>Ver en maps</a>");








//var  = L.marker([],).addTo(map).bindPopup(" <br> Profesor:  <br><a href=''>Ver en maps</a>");
