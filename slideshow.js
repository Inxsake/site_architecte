var slides = document.getElementsByClassName("slide"); // Permet de récupérer les 4 conteneurs de classe "slide"
var prevSlide = document.getElementById("prevSlide")
var nextSlide = document.getElementById("nextSlide")

let index = 0;

nextSlide.addEventListener('click', function () {
    slides[index].style.display = "none";
    index++
    index=index % 4
    showSlide(index)
})

prevSlide.addEventListener('click', function () {
    slides[index].style.display = "none";
    index--
    if (index<0) {
        index = 3
    }
    showSlide(index)
})

function showSlide(index){  // fonction permetant d'afficher les images
    slides[index].style.display = "block";
}
showSlide(index)