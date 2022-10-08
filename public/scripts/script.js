//Fixed nav
window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("fixed",window.scrollY > 1000);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//Display sections
$(window).scroll(()=>{
    let animate = document.querySelectorAll(".animation");
    let scrollTop = $(document).scrollTop();
    for (let i = 0; i < animate.length; i++) {
        let heightAnimate = animate[i].offsetTop; 
        if(heightAnimate - 500 < scrollTop){
            animate[i].style.opacity = 1;
            animate[1].classList.add("show");
        }
    }
});

