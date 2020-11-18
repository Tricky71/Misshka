$(".main-header__top-toggle").click(function() {
    $(".main-header__bottom").slideToggle();
});

function initMap() {
    var myMap = new google.maps.Map(document.getElementById('map'), {
      
      center: {lat: 59.938854, lng: 30.322919},
      zoom: 18,
    // Отключение элементов управления картой
      disableDefaultUI: true, 
    //   panBy: (200, 250),
    });

    var marker = new google.maps.Marker ({
        position: {lat: 59.938854, lng: 30.322919},
        map: myMap,
        // animation: google.maps.Animation.BOUNCE,
        icon: "img/map-pin.png"
    }); 
     
}

// $('.slider__list').slick({
//       infinite: true,
//       arrows: false,
// 	//   dots: true,
// 	  autoplay: true
// });


var modalOverlay=document.querySelector(".modal-overlay");
var modalCart=document.querySelector(".modal-cart");
var openButton=document.querySelectorAll(".cart__button");

[].forEach.call(openButton, function(more) {more.addEventListener("click",function(evt) {evt.preventDefault();
modalOverlay.classList.add("modal__open"); modalCart.classList.add("modal__open");
});});

modalOverlay.addEventListener("click", function(evt) {evt.preventDefault();
modalOverlay.classList.remove("modal__open"); console.log("модалка открыта"); modalCart.classList.remove("modal__open");});


        

    