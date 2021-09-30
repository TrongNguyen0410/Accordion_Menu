var liLinks = document.querySelectorAll('.accordion-wrap li');
var ulLink = document.querySelector('.accordion-wrap');

liLinks.forEach( function(liLink){
    liLink.addEventListener('click', function(){
        liLinks.forEach(function(liLink) {
            liLink.classList.remove('active');
        })
        liLink.classList.add('active');
    })
})

ulLink.addEventListener('mouseleave', function(){
    liLinks.forEach( function(liLink){
        liLink.classList.remove('active');
    })
})
