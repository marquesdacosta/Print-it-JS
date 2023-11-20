const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let flecheGauche = document.getElementById('fleche-gauche');
let flecheDroite = document.getElementById('fleche-droite');

let imgActuel = document.querySelector('.banner-img');
let tagLine = document.getElementById('tag-line');
let dots = document.querySelectorAll('.dots .dot');
let index = 0;


function bulletPoint(){

	imgActuel.src = './assets/images/slideshow/' + slides[index].image;

	tagLine.innerHTML = slides[index].tagLine;
	
	for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('dot_selected');
}	
	dots[index].classList.add('dot_selected');
}



flecheGauche.addEventListener("click", function(){
	console.log("j'ai cliqué sur la fleche gauche");


	 if (index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }

	bulletPoint();
})

flecheDroite.addEventListener("click", function(){
	console.log("j'ai cliqué sur la fleche droite");


	 if (index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }

	bulletPoint();
})

