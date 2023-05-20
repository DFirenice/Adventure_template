const menuBtn = document.getElementById('menu_btn'),
	  mainMenu = document.getElementById('main_menu'),
	  animate_me = document.querySelectorAll(".slide_top")
let menuState = true // true - hidden default

window.onload = () => {
	animate_me.forEach((e) => {
		if (e.getBoundingClientRect().top < window.innerHeight) {
			e.style.display = "flex"
			e.style.animation = "slide-top 0.75s ease-out 0s 1 normal forwards"
		}

		window.addEventListener("scroll", () => {
		    if (e.getBoundingClientRect().top < window.innerHeight) {
				e.style.display = "flex"
				e.style.animation = "slide-top 0.75s ease-out 0s 1 normal forwards"
		    }
		})
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