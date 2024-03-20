// Animaciones R
AOS.init();
// 

let spans = document.getElementsByClassName('h-mover');

let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 820px)");
if (mob_view.matches){
	movePer = 50.36;
	maxMove = 504;
}
let left_mover = ()=>{
	l = l - movePer;
	if (l<=0){l = 0;}
	for(const i of product){
		if (product_page>1){
			i.style.left = '-' + l + '%';
		}
	}
}
let right_mover = () => {
	l = l + movePer;
	if (product.length === 1) { // Corregir la comparación
	  l = 0;
	}
	for (const i of product) {
	  if (l > maxMove) {
		l = l - movePer;
	  }
	  i.style.left = '-' + l + '%';
	}
}
spans[1].onclick = ()=>{right_mover();}
spans[0].onclick = ()=>{left_mover();}


const starContainers = document.querySelectorAll('.star-precio');

starContainers.forEach(container => {
  const starsGold = container.querySelectorAll('.starBi');

  starsGold.forEach(function(starBi, index) {
    starBi.addEventListener('click', function() {
      // Reset all stars in the current product container
      container.querySelectorAll('.starBi').forEach(star => star.classList.remove('checked'));
      
      // Add "checked" class up to the clicked star (inclusive)
      for (let i = 0; i <= index; i++) {
        starsGold[i].classList.add('checked');
      }
    });
  });
});