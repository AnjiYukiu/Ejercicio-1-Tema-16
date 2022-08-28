let marker, map

function initMap() {
    const posicion1 = {
        lat: 40.05721089689486,
        lng: 0.08501032416816834
    }
    const posicion2 = {
        lat: 43.353462852746205,
        lng: -2.845182806187704
    }
    const posicion3 = {
        lat: 10.41379887112686,
        lng: 107.13712476768801
    }
    map = new google.maps.Map( document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
    })

    marker = new google.maps.Marker({
        position: posicion2,
        map,
    })

    marker = new google.maps.Marker({
        position: posicion3,
        map,
    })
}
