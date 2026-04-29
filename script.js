//your JS code here. If required.
let container = document.querySelector(".container")
let fragment = document.createDocumentFragment();
for(let i=0; i<800; i++){
	let square = document.createElement("div");
	square.classList.add("square");
	fragment.append(square)
}
container.append(fragment)

let squares = document.querySelectorAll(".square")

function getRandomColor(){
	return `rgb(${Math.floor(Math.random()*255)},
				${Math.floor(Math.random()*255)},
				${Math.floor(Math.random()*255)})`;
}

for(let square of squares){
	square.addEventListener("mouseover", ()=>{
		square.style.backgroundColor=getRandomColor();
		
	});
	square.addEventListener("mouseout",()=>{
		setTimeout(()=>{
			square.style.backgroundColor = "#1d1d1d"
		}, 1000)
	})

}

