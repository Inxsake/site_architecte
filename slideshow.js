var slides = document.getElementsByClassName("slide"); // Permet de récupérer les 4 conteneurs de classe "slide"

function showSlide(index){  // fonction permetant d'afficher les images
    slides[index].style.display = "block";
}

showSlide(0);