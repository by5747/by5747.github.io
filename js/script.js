// Google Maps API를 사용하여 지도 표시
function initMap() {
    var myLatLng = {lat: 37.5665, lng: 126.9780}; // 예시 위치 (서울)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '결혼식장'
    });
}

function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

