/*============== SHOW MENU ============ */
const navMenu = document.querySelector(".nav__list"),
	navToggle = document.querySelector(".nav__hamburger--open");

/* ========= MENU SHOW/HIDE ======== */
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navToggle.classList.contains("ri-menu-line") ? showMenu() : hideMenu();
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

/*============ CHANGE HEADER POSITION =========*/
function scrollHeader() {
	const header = document.querySelector(".header");
	// When the scroll is greater than 80px viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*============= SCROLL REVEAL ANIMATION ==============*/
let prevRatio = 0.0;
window.addEventListener(
	"load",
	() => {
		let aboutSection = document.getElementById("section-about");
		let features = document.querySelectorAll("article");
		let footerElement = document.getElementById("footer");
		createObserver(aboutSection);
		features.forEach((f) => {
			createObserver(f);
		});
		createObserver(footerElement);
	},
	false
);

function createObserver(target) {
	let options = {
		root: null, //null means use default device viewport as root element
		rootMargin: "0px",
		threshold: [0, 0.5, 1.0], //threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option
	};
	let observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(target);
}

function handleIntersect(entries, observer) {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > prevRatio) {
			entry.target.classList.add("animate");
		}
		prevRatio = entry.intersectionRatio;
	});
}
