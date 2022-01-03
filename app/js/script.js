/*============== SHOW MENU ============ */
const navMenu = document.querySelector(".nav__list"),
	navToggle = document.querySelector(".nav__hamburger--open");

/* ========= MENU SHOW/HIDE ======== */
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navToggle.classList.contains("ri-menu-line") ? showMenu() : removeMenu();
	});
}

function showMenu() {
	// When we click on .nav__hamburger, we remove .ri-menu-line icon and add .ri-close-line icon, show-menu class to .navMenu
	navToggle.classList.remove("ri-menu-line");
	navToggle.classList.add("ri-close-line");
	navMenu.classList.add("show-menu");
}

function hideMenu() {
	// onclick .nav__hamburger, we add .ri-menu-line icon and remove the show-menu class
	navToggle.classList.add("ri-menu-line");
	navToggle.classList.remove("ri-close-line");
	navMenu.classList.remove("show-menu");
}

/*============ REMOVE MENU MOBILE ============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	// When we click on each nav__link, we remove the show-menu class
	hideMenu();
}
navLink.forEach((link) => link.addEventListener("click", linkAction));
