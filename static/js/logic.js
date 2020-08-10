alert("working")


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>', 
    // attribution: "Map data",
    maxZoom: 18,
    accessToken: API_KEY
})


let map = L.map("mapid", {
    center: [40.7, -94.5],
    zoom: 3,
    layers:[streets]
})



let baseMap = {
    "Streets": streets,
    "satellite": satellitestreets,
    light: light
}

// let over
// L.control.layers(baseMap, overlays)