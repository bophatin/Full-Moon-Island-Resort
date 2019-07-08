// OPEN OVERLAY
function openNav() {
    document.getElementById('myNav').style.width="100vw";
    document.querySelector('.overlay').style.zIndex="2000";
}

// CLOSE OVERLAY 
function closeNav() {
    document.getElementById('myNav').style.width="0";
    document.getElementById('hp').style.width="90%";
    document.getElementById('container_txt').style.display="block";
}

// ANIME TXT HOME PAGE
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

// ANOME ICON MOON HOME PAGE
document.querySelector('i').addEventListener('click', () => {
    anime({
        targets: 'h1',
        opacity: [0,1],
        translateY: [-150,0],
        easing: 'easeOutExpo',
     })
})


// CALL
document.getElementById('openNav').addEventListener("click", function() { openNav() })
document.getElementById('closeNav').addEventListener("click", function() { closeNav() })
