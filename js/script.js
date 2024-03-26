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

// 모달창 열기
function openModal(imgSrc, imgAlt) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgAlt;
}

// 모달창 닫기
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
