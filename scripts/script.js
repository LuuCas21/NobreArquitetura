'use script';

const link__1 = document.querySelector('#link_1');
const link__2 = document.querySelector('#link_2');
const link__3 = document.querySelector('#link_3');
const link__4 = document.querySelector('#link_4');

//window.onscroll = function() {};

const div_1 = document.querySelector('#project_content');
const div_2 = document.querySelector('#office_content');
const div_3 = document.querySelector('#whoami_content');
const div_4 = document.querySelector('#contact_content');


/*const get_position_div_1 = div_1.offsetTop;
console.log(get_position_div_1);*/

/*function div1_location() {
    if(window.scrollY >= get_position_div_1) {
        link__1.style.color = 'red';
    }
}
*/

//const get_position_div_1 = div_1.offsetTop;

const get_position_div1 = div_1.getBoundingClientRect();
console.log(get_position_div1);

const get_position_div2 = div_2.getBoundingClientRect();
console.log(get_position_div2);

const get_position_div3 = div_3.getBoundingClientRect();
console.log(get_position_div3);

const get_position_div4 = div_4.getBoundingClientRect();
console.log(get_position_div4);

window.addEventListener('scroll', function() {
    if(window.scrollY >= get_position_div1.y) {
        link__1.style.fontWeight = 'bold';
    } else {
        link__1.style.fontWeight = 'normal';
    }
});

window.addEventListener('scroll', function() {
    if(window.scrollY >= get_position_div2.y) {
        link__1.style.fontWeight = 'normal';
        link__2.style.fontWeight = 'bold';
    } else {
        link__2.style.fontWeight = 'normal';
    }
});

window.addEventListener('scroll', function() {
    if(window.scrollY >= get_position_div3.y) {
        link__2.style.fontWeight = 'normal';
        link__3.style.fontWeight = 'bold';
    } else {
        link__3.style.fontWeight = 'normal';
    }
});

window.addEventListener('scroll', function() {
    if(window.scrollY >= get_position_div4.y) {
        link__3.style.fontWeight = 'normal';
        link__4.style.fontWeight = 'bold';
    } else {
        link__4.style.fontWeight = 'normal';
    }
});


link__1.addEventListener('click', function(event) {
    event.preventDefault();
    div_1.scrollIntoView({ behavior: 'smooth' });
});

link__2.addEventListener('click', function(event) {
    event.preventDefault();
    div_2.scrollIntoView({ behavior: 'smooth'});
});

link__3.addEventListener('click', function(event) {
    event.preventDefault();
    div_3.scrollIntoView({ behavior: 'smooth'});
});

link__4.addEventListener('click', function(event) {
    event.preventDefault();
    div_4.scrollIntoView({ behavior: 'smooth'});
});

window.onscroll = function() {sticky_navbar()};
const navbar = document.querySelector('#nav_bar');
const navbar_replace = document.querySelector('.sticky');
const sticky = navbar.offsetTop;

function sticky_navbar() {
    if(window.pageYOffset > sticky) {
        navbar.classList.add('sticky_');
    } else {
        navbar.classList.remove('sticky_');
    }
};

const bTn_up = document.querySelectorAll('.fa-angle-up');
const mainPage = document.querySelector('#main_page');

/*bTn_up.addEventListener('click', function() {
    for(let u = 0; u < bTn_up[u]; u++) {
        mainPage.scrollIntoView({ behavior: 'smooth' });
    }
});
*/

for(let u = 0; u < bTn_up.length; u++) {
    bTn_up[u].addEventListener('click', function() {
        mainPage.scrollIntoView({ behavior: 'smooth' });
    });
}

const slide_side_div = document.querySelector('#social_medias');
const bTn_slide_right = document.querySelector('.fa-angle-right');
const bTn_slide_left = document.querySelector('.fa-angle-left');
const div_social_icons = document.querySelector('#scroll_right');

bTn_slide_right.addEventListener('click', function() {
    div_social_icons.style.width = '120px'; //490px
    bTn_slide_left.style.display = 'block';
    bTn_slide_right.style.display = 'none';
});

bTn_slide_left.addEventListener('click', function() {
    div_social_icons.style.width = '0px';
    bTn_slide_left.style.display = 'none';
    bTn_slide_right.style.display = 'block';
});

addEventListener('keydown', function(event) {
    console.log(event.key);
    if(event.key === 'Escape') {
        div_social_icons.style.width = '0px';
        bTn_slide_left.style.display = 'none';
        bTn_slide_right.style.display = 'block';
    }
})

const search_engine = document.querySelector('#search_engine_form');
const bTn_search = document.querySelector('.fa-search');
const bTn_close = document.querySelector('#bTn_close');

bTn_search.addEventListener('click', function() {
    //search_engine.style.height = '50px';
    search_engine.classList.toggle('open');
});

bTn_close.addEventListener('click', function() {
    //search_engine.style.height = '0px';

    if(search_engine.classList.contains('open')) {
        search_engine.classList.remove('open');
    }
});

window.addEventListener('scroll', function() {
        const popUpMessage = document.querySelector('#popUpMessage');
        setTimeout(function() {
            popUpMessage.classList.add('appear');
        }, 1000);
});

/*const myQuery_1 = window.matchMedia('(min-width: 540px)');

function myMedia(myQuery_1) {
if(myQuery_1.matches) {
    bTn_slide_right.addEventListener('click', function() {
        div_social_icons.style.width = '120px';
        bTn_slide_left.style.display = 'block';
        bTn_slide_right.style.display = 'none';
    });
}
}

myQuery_1.addListener(myMedia);
myMedia(myQuery_1);
*/