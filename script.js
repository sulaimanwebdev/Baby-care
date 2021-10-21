let links = document.querySelectorAll('.aaCh');
function go() {
	links.forEach(abs => abs.classList.remove('radioActive'));
	this.classList.add('radioActive');
}



links.forEach(abs => abs.addEventListener('click', go));


