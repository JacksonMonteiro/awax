const menuOpener = document.getElementById("menu-opener");
const menu = document.getElementById("menu");
let c = 0;

menuOpener.addEventListener('click', () => {
	c += 1;

	if (c % 2 !== 0) {
		menu.style.display = "block";
	} else  {
		menu.style.display = "none";
	}
});