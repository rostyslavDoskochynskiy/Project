"use strict";

var index = 1;
showSlides(index);

function moveSlides(n) {
    showSlides(index +=n);
}

function activeSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;
    var img = document.getElementsByClassName("img");
    var dot = document.getElementsByClassName("dot");

    if (n>img.length) {
        index = 1;
    }

    if (n<1) {
        index=img.length;
    }

    for (var i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    for (var i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", "");
    }

    img[index-1].style.display = "block";
    dot[index-1].className+=" active";
}


var member = document.getElementById("member");

member.onmouseover = function (emo) {
    var emo = emo.target;
    if (emo.className == 'mainBlock') {
        var collapseBlock = emo.getElementsByClassName("collapseBlock");
        hideCollapse();
        collapseBlock[0].style.display = "block";
    }
}

document.onmouseover = function (emo) {
    var emo = emo.target;
    if(emo.className!=='mainBlock' && emo.className!=='collapseBlock'){
        hideCollapse();
    }
}

function hideCollapse() {
    var collapseBlock = document.getElementsByClassName("collapseBlock");
    for (var i = 0; i < collapseBlock.length; i++) {
        collapseBlock[i].style.display = "none";
    }
}

function initMap() {
    var myLatLng = {lat: 49.2989, lng: 23.5561};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Репитиційна база гурту Лоскіт'
    });
}

$(document).ready(function (){
    var $text = $(".text");
    $text.hide().prev().click(function (){
        $text.not(this).slideUp(1000);
        $(this).next().not(":visible").slideDown(1000);
    });

    $('a[href^="#"]').click(function (){
        var currentElement = $(this).attr("href");
        var destination = $(currentElement).offset().top;
        $('html, body').animate({scrollTop: destination}, 1500);
        return false;
    })
});






