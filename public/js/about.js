// ANME PAGE ABOUT
document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({ 
        easing: 'easeOutExpo'
    })
    .add ({
        targets : '.content_title > h1',
        opacity : [0,1],
        translateY: [-400,0],
    })
    .add ({
        targets : '.content_title > p',
        opacity : [0,1],
        translateY: [-100,0],
        offset : '-= 700',

    })
    .add ({
        targets : '.bloc_txt > p',
        opacity : [0,1],
        translateX: [-200,0],
        offset : '-= 700',
    })
    .add ({
        targets : '.figure_1',
        opacity : [0,1],
        offset : '-= 800',
    })

    let waypoint1 = new Waypoint({
        element: document.querySelector('.content_founders > img'),
        handler: function(direction) {
            anime({
                easing: 'easeOutExpo',
                targets: '.content_founders > img',
                easing: 'easeOutExpo',
                translateY: [800,0],
                opacity: [0,1],
            })
        },
        offset: '100%',
    })
    let waypoint2 = new Waypoint({
        element: document.querySelector('.figure_2 > img'),
        handler: function(direction) {
            anime({
                easing: 'easeOutExpo',
                targets: '.figure_2 > img',
                easing: 'easeOutExpo',
                opacity: [0,1],
                delay:200,
            })
        },
        offset: '100%',
    })
    let waypoint3 = new Waypoint({
        element: document.querySelector('.content_found_right > img'),
        handler: function(direction) {
            anime({
                easing: 'easeOutExpo',
                targets: '.content_found_right > img',
                easing: 'easeOutExpo',
                opacity: [0,1],
                delay:200,
            })
        },
        offset: '100%',
    })
    let waypoint4 = new Waypoint({
        element: document.querySelector('.content_bio_img > img'),
        handler: function(direction) {
            anime({
                easing: 'easeOutExpo',
                targets: '.content_bio_img > img',
                easing: 'easeOutExpo',
                opacity: [0,1],
                delay:200,
            })
        },
        offset: '100%',
    })
    let waypoint5 = new Waypoint({
        element: document.querySelector('.content_bio_img2 > img'),
        handler: function(direction) {
            anime({
                easing: 'easeOutExpo',
                targets: '.content_bio_img2 > img',
                easing: 'easeOutExpo',
                opacity: [0,1],
                delay:200,
            })
        },
        offset: '100%',
    })
})


// ANIME CHANGE TXT LINK OPACITY
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
function changeTxt() {
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
changeTxt();