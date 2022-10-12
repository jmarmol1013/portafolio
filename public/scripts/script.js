/* Portfolio Juan Camilo Marmolejo 301223791 01/10/2022 */
window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("fixed",window.scrollY > 1000);
});