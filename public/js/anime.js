// HOME PAGE
document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({ })
    .add ({
        targets: '.little_title',
        opacity: [0,1],
        translateY: [-100, 0],
        easing: 'easeOutExpo',
    })
    .add ({
        targets: 'button',
        opacity: [0,1],
        translateY: [50,0],
        offset : '-= 700',
        easing: 'easeOutExpo',
    })
    .add ({
        targets: '#h1_hp',
        opacity: [0,1],
        translateX: [-100,0],
        offset : '-= 700',
        easing: 'easeOutExpo',
    })
    .add ({
        targets : 'i',
        opacity : [0,1],
        translateY: [50,0],
        offset : '-= 800',
    })
})


// HOME PAGE (ICON MOON)
document.querySelector('i').addEventListener('click', () => {
    anime({
        targets: 'h1',
        opacity: [0,1],
        translateY: [-150,0],
        easing: 'easeOutExpo',
     })
})


// PAGE ABOUT
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
        element: document.querySelector('.container_founders > img'),
        handler: function(direction) {
            anime({
                easing: 'easeOutExpo',
                targets: '.container_founders > img',
                easing: 'easeOutExpo',
                translateY: [250,0],
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
