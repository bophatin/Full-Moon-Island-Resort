// CHANGE IMAGE HOME PAGE
var img_tracker = 'day';

function changeImage() {
    var image = document.getElementById('hp');
    var iconMoon = document.querySelector('i');
    var title = document.querySelector('h1');
    
    if (img_tracker == 'day') {
        iconMoon.style.color="peru";
        title.innerHTML="We do things for people, with love";
        image.style.opacity="0 1";
        image.style.transition="0.5s";
        image.style.background = "url(public/img/FMI-night.jpg) no-repeat fixed";
        img_tracker = 'night';
    } else {
        iconMoon.style.color="black";
        title.innerHTML="An ecologic and luxury resort";
        image.style.opacity="0 1";
        image.style.transition="0.5s";
        image.style.background ="url(public/img/FMI-day.jpg) no-repeat fixed";
        img_tracker = 'day';
    }
}

document.querySelector('i').addEventListener("click", function() { changeImage() })