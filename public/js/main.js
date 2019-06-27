
// OPEN OVERLAY
function openNav() {
    document.getElementById('myNav').style.width="50vw";
    document.querySelector('.overlay').style.zIndex="2000";
}


// CLOSE OVERLAY 
function closeNav() {
    document.getElementById('myNav').style.width="0";
    document.getElementById('hp').style.width="90%";
    document.getElementById('container_txt').style.display="block";
}


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


// ANIME CHANGE TXT PAGE ABOUT
function animeTxt() {
    anime.timeline({ })
    .add ({
        targets: '.change_txt',
        opacity: [0,1],
        duration : 2500,
        easing: 'easeOutExpo',
    })
}

// CHANGE TXT NAV PAGE ABOUT
function changeHumans() {
    var txt = document.querySelector('.change_txt');
    var humans = document.querySelector('.humans');
    var eco = document.querySelector('.ecologic');
    var luxury = document.querySelector('.luxury');

    humans.addEventListener("click", function() { 
        txt.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";
        animeTxt();
    })

    eco.addEventListener("click", function() { 
        txt.innerHTML="With a background in residential property development, commercial real estate and a side hustle in high end furniture manufacturing, she boasts one hearty repertoire of design related skills and experience. (We could list the range of creative project’s she’s been involved in, but the fact of the matter is, the list of projects she hasn't touched would likely be shorter). She believes in purposeful design intentions that are a true reflection of her clients personalities and values, and has no fear when entering uncharted design-related waters... nothing memorable ever came out of playing it safe! She rarely sits still for long, so if you're USA based you best be jumping on that contact button - STAT! Who knows, she could be in your city right this moment!? (We’ve given up trying to keep tabs on her!)";
        animeTxt();
    })
    
    luxury.addEventListener("click", function() {
        txt.innerHTML="We value the collaboration of minds, ideas and transparency; the connection of our service and your needs to produce an outcome that is a physical representation of your brand, personality and aesthetic combined with our skills, experience and design capabilities. She tends not to take herself too seriously, but you most certainly should, because she’s a first class designer, who, as it so happens, graduated with first class honours! She's a weapon in her own right, but is big on multidisciplinary collaboration in producing holistic and user-centric solutions. With a love for raw and honest interiors, a razor sharp eye for detail and a value of integrity above all else, Hayley can turn a so-so space into magic. Without the wand.";
        animeTxt();
    })
}



// SCROLL PAGE ABOUT
/*var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faireQuelqueChose(position_scroll) {
    anime.timeline({ })
    .add ({
        targets: '.container_founders > img',
        opacity: [0,1],
        easing: 'easeOutExpo',
    })
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      faireQuelqueChose(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }

  ticking = true;
});*/



// CALL
// Home Page
document.getElementById('openNav').addEventListener("click", function() { openNav() })
document.getElementById('closeNav').addEventListener("click", function() { closeNav() })
document.querySelector('i').addEventListener("click", function() { changeImage() })

// Page About
changeHumans();