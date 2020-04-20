window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        document.querySelector('#main-nav').style.opacity = 0.9;
    }
    else{
        document.querySelector('#main-nav').style.opacity = 1;
    }
});