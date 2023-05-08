const card = document.querySelector(".card");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");
const mark = document.querySelector(".fa-xmark");

btn.addEventListener("click", function(){
	card.style.display = "block";
})

mark.addEventListener("click", function(){
	card.style.display = "none";
})

var arrayOfColors = [
	"rgb(122, 153, 36)",
	"rgb(211, 21, 218)",
	"rgb(21, 162, 218)",
	"rgba(72, 141, 40, 0.514)"
];
var arrayOfDegrees = [
	1,
	-1,
	3,
	-5,
	-8
];


let textarea = document.querySelector(".field");
textarea.addEventListener('keydown', function addElement(event){
	if(event.code == 'Enter' || event.keyCode === 13){
   let flexContainer = document.querySelector(".flex__container");
	let randomColor = arrayOfColors[Math.floor(Math.random()*arrayOfColors.length)];
   let randomDegree = arrayOfDegrees[Math.floor(Math.random()*arrayOfDegrees.length)];
	let element = `<div class="flex__item" style="background-color: ${randomColor};
	transform: rotate(${randomDegree}deg);"><h3>${textarea.value}</h3></div>`;
	flexContainer.insertAdjacentHTML('beforeend', element);
	}
	console.log(event.code)
	console.log(event.key)
})


