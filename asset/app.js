// ============== Layer Group ==========================
const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const pasarGroup = L.layerGroup();
// ======================================================



// ====================== Icon ==========================
const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/sekolah.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/masjid.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'asset/leaflet/images/toko.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'asset/leaflet/images/puskesmas.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
// =======================================================




// ===================== Marker ===========================
var masjid = [
    L.marker([-8.78639807978996, 116.4802801585135], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="asset/leaflet/images/masjid1.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.78713860801498, 116.48171631151862], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/sekolah1.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.794998245673339, 116.48346175037402], { icon: iconpuskesmas }).addTo(puskesmasGroup).bindPopup(` <img src="asset/leaflet/images/puskesmas1.png">`),
    // Tambahkan Kornat jika lebih dari 1
];
var toko = [
    L.marker([-8.790035727699102, 116.48145537280428], { icon: iconToko }).addTo(tokoGroup),
    // Tambahkan Kornat jika lebih dari 1
];

var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
// ========================================================




// ======================== Layer =========================
var layer2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const map = L.map('map', {
    center: [-8.805767160537458, 116.4695320549471],
    zoom: 13,
    layers: [layer2, sekolahGroup, masjidGroup, tokoGroup, puskesmasGroup]
});
var layer3 = L.tileLayer('https://data.geopf.fr/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
    attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
    bounds: [[-75, -180], [81, 180]],
    minZoom: 2,
    maxZoom: 19,
    format: 'image/jpeg',
    style: 'normal'
});
// =======================================================


const baseLayers = {
    'Layer 1': layer1,
    'Layer 2': layer2,
    'Layer 3': layer3
};

const overlays = {
    'Sekolah': sekolahGroup,
    'Masjid': masjidGroup,
    'Toko': tokoGroup,
    'puskesmas': puskesmasGroup,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);