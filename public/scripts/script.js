/* Portfolio Juan Camilo Marmolejo 301223791 01/10/2022 */
window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("fixed",window.scrollY > 1000);
});

//Alert if is clicking a btn danger
(function(){
    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();

