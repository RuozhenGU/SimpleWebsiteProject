

let pElement = document.getElementById("target");

pElement.onclick = newStyle //register a new event


function newStyle() {
	console.log("in function newStyle")
	let newColor = '';
	let newFont = '';   
	var element = document.getElementById('target'); 
	element.style.color = "purple"; 
	element.style.fontFamily = "Impact"
}

function showMoreFunc() {
	let youtube = document.createElement("li");
	youtube.innerHTML ="<a href= 'https://www.youtube.com'>YouTube</a>"

	let instagram = document.createElement("li");
	instagram.innerHTML = "<a href= 'https://www.instagram.com'>Instagram</a>";

	

	let newLine = document.createElement("br");

	document.getElementById("list").appendChild(youtube);
	document.getElementById("list").appendChild(newLine);
	document.getElementById("list").appendChild(instagram);

	let text = document.getElementById("showMore");
	document.getElementById("div2").removeChild(text);

}


let media = document.getElementById("social-media");
let buttonShare = document.getElementById("share-button");

function clickToshow() {
	media.style.display = 'block';
	buttonShare.innerHTML = "Please contact me";
}

buttonShare.onclick = clickToshow