const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#19fb03','#Fb0319','#03fbf2','#Fdf30e']//karelerin alacağı  renkler
const kareSayisi = 1000;

for(let i=0; i<kareSayisi; i++) {
	const kare = document.createElement('div');
	kare.classList.add('kare');
	
	kare.addEventListener('mouseover', () => {
		setColorToEl(kare);
	});
	
	kare.addEventListener('mouseout', () => {
		removeColorFromEl(kare);
	});
	
	container.appendChild(kare);
}

function setColorToEl(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}





