window.addEventListener('load', () => {
//Parallax effects
const aboutImage = document.getElementsByClassName('image-about');
new simpleParallax(aboutImage, {
    orientation: 'left',
    overflow: true,
    delay: 2
});

const howItWorksImage = document.getElementsByClassName('social');
new simpleParallax(howItWorksImage, {
    overflow: true,
    delay: 1
});

const rwdImage = document.getElementsByClassName('rwd');
new simpleParallax(rwdImage, {
    orientation:'left',
    overflow: true,
    delay: 1
});

const coinImage = document.getElementsByClassName('coin');
new simpleParallax(coinImage, {
    orientation:'right',
    overflow: true,
    delay: 1
});

const laptopTabletImage = document.getElementsByClassName('laptop-tablet');
new simpleParallax(laptopTabletImage, {
    orientation:'left',
    overflow: true,
    delay: 1
});
//Parallax effects

//scroll animations
window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 600){
        document.querySelector('.navigation').classList.add('navigation-scroll');
    }

    if(window.pageYOffset <= 600 && document.querySelector('.navigation').classList.contains('navigation-scroll')){
        document.querySelector('.navigation').classList.remove('navigation-scroll');
    }

    if(window.pageYOffset >= document.querySelector('.about').offsetTop -300){
        document.querySelector('.about .section-title').classList.add('animate__fadeInBottomLeft')
        document.querySelector('.about-desc').classList.add('animate__fadeInBottomLeft')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop - 400){
        document.querySelector('.ofert .section-title').classList.add('animate__fadeInBottomLeft')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop + document.querySelector('.oferts-all').offsetTop + document.querySelector('.oferts-all .ofert-wrap:nth-of-type(1)').offsetTop - 500){
        document.querySelector('.oferts-all .ofert-wrap:nth-of-type(1)').classList.add('animate__fadeInLeft')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop + document.querySelector('.oferts-all').offsetTop + document.querySelector('.oferts-all .ofert-wrap:nth-of-type(2)').offsetTop - 500){
        document.querySelector('.oferts-all .ofert-wrap:nth-of-type(2)').classList.add('animate__fadeInRight')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop + document.querySelector('.oferts-all').offsetTop + document.querySelector('.oferts-all .ofert-wrap:nth-of-type(3)').offsetTop - 500){
        document.querySelector('.oferts-all .ofert-wrap:nth-of-type(3)').classList.add('animate__fadeInLeft')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop + document.querySelector('.oferts-all').offsetTop + document.querySelector('.oferts-all .ofert-wrap:nth-of-type(4)').offsetTop - 500){
        document.querySelector('.oferts-all .ofert-wrap:nth-of-type(4)').classList.add('animate__fadeInRight')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop + document.querySelector('.oferts-all').offsetTop + document.querySelector('.oferts-all .ofert-wrap:nth-of-type(5)').offsetTop - 500){
        document.querySelector('.oferts-all .ofert-wrap:nth-of-type(5)').classList.add('animate__fadeInLeft')
    }

    if(window.pageYOffset >= document.querySelector('.ofert').offsetTop + document.querySelector('.oferts-all').offsetTop + document.querySelector('.oferts-all .ofert-wrap:nth-of-type(6)').offsetTop - 500){
        document.querySelector('.oferts-all .ofert-wrap:nth-of-type(6)').classList.add('animate__fadeInRight')
    }

    if(window.pageYOffset >= document.querySelector('.how-it-works').offsetTop - 400){
        document.querySelector('.how-it-works .section-title').classList.add('animate__fadeInLeft')
    }

    if(window.pageYOffset >= document.querySelector('.how-it-works').offsetTop + document.querySelector('.step').offsetTop - 400){
        document.querySelectorAll('.step').forEach(step => {
            step.classList.add('animate__fadeInRight')
        })
    }

    if(window.pageYOffset >= document.querySelector('.opinions').offsetTop - 400){
        document.querySelector('.opinions .section-title').classList.add('animate__fadeInLeft');
        document.querySelector('.opinions-box').classList.add('animate__fadeInUp');
    }

    if(window.pageYOffset >= document.querySelector('.form').offsetTop - 400){
        document.querySelector('.form .section-title').classList.add('animate__fadeInLeft');
    }
})
//scroll animations

//nav - scroll
let scrollNav = 0;

document.querySelector('.navigation').addEventListener('mouseover', () => {
    if(document.querySelector('.navigation').classList.contains('navigation-scroll')){
        document.querySelector('.navigation').classList.remove('navigation-scroll');
        scrollNav = 1;
    }
})

document.querySelector('.navigation').addEventListener('mouseleave', () => {
    if(scrollNav === 1){
        document.querySelector('.navigation').classList.add('navigation-scroll');
        scrollNav = 0;
    }
})
//nav - scroll


//nav - down
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('active-menu')
})

document.querySelectorAll('.nav-list-item').forEach(item => {
    item.addEventListener('click', () => {
        const dataAttribute = item.dataset.sectionName;
        document.querySelector('.navigation').classList.remove('active-menu')
        document.querySelectorAll('section').forEach(section => {
            if(dataAttribute == section.dataset.sectionName){
                window.scroll({
                    top: section.offsetTop - 100,
                    behavior: "smooth"
                })
            }
        })
    })
})
//nav - down

//opinions - banner
$(document).ready(function() {
    $('.opinions-box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        accessibility: true,
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 10000,
        nextArrow: $('.arrow-right'),
        prevArrow: $('.arrow-left'),
    })
})

//opinions - banner
})