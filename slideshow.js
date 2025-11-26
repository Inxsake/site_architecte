var slides = document.getElementsByClassName("slide"); // Permet de récupérer les 4 conteneurs de classe "slide"
var prevSlide = document.getElementById("prevSlide")
var nextSlide = document.getElementById("nextSlide")

let index = 0;

nextSlide.addEventListener('click', function () { // Permet de passer à l'image suivante
    slides[index].style.display = "none";
    index++
    index=index % 4 // permet de revenir au début si l'index dépasse 3
    showSlide(index)
})

prevSlide.addEventListener('click', function () { // // Permet de passer à l'image précédente
    slides[index].style.display = "none";
    index--
    if (index<0) { // permet de revenir à la fin si je passe à un nombre négatif
        index = 3
    }
    showSlide(index)
})

function showSlide(index){  // fonction permetant d'afficher les images
    slides[index].style.display = "block";
}
showSlide(index)