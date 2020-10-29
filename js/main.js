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






 
})