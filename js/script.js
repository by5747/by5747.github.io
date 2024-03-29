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

// function copyToClipboard(val) {
//     var t = document.createElement("textarea");
//     document.body.appendChild(t);
//     t.value = val;
//     t.select();
//     document.execCommand('copy');
//     document.body.removeChild(t);
// }


// <button id="copybtn" onclick="copyToClipboard('123456789');" title="계좌번호 복사">복사</button>


function copyToClipboard(val) {
    var el = document.createElement('textarea');
    el.value = val;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("복사되었습니다: " + val);
}

