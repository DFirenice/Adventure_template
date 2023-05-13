const elements = document.querySelectorAll('.move_top'),
	 menuBtn = document.getElementById('menu_btn'),
	 mainMenu = document.getElementById('main_menu')
let menuState = true // true - hidden default

window.onload = () => {
	elements.forEach((element) => {
		element.style.display = 'flex'
		element.style.animationDelay = "0.125s"
		element.style.animation = "slide-top 0.5s ease-out both"
	})
}

function checkMenuState() {
	if (menuState) {
		mainMenu.style.display = "flex"
		menuBtn.style.opacity = 0
		menuState = false
	} else {
		mainMenu.style.display = "none"
		menuBtn.style.opacity = 1
		menuState = true
	}
}