window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("fixed",window.scrollY > 1000);
});