$(() => {
	// ====== [BEGIN] Preloader ======
	const body = document.querySelector("body");
	const div = document.createElement("div");
	div.classList.add("preloader");
	body.appendChild(div);
	// Hide Scrollbar
	document.body.style.overflow = 'hidden';
	// What for page to compleatly loaded
	setTimeout(() => {
		// Remove the preloader
		$(".preloader").remove();
		// Show Scrollbar
		document.body.style.overflow = 'visible';
		// Initial Wow Animation While Scrolling
		new WOW().init();
	}, 2000);
	// ====== [END] Preloader ======

	// ====== [BEGIN] Toggle the sidebar on mobile version ======
	const btnMenu = document.getElementById("menu-icon-trigger");
	btnMenu.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector('.menu-icon-wrapper').classList.toggle('open');
		document.querySelector('.nav-content').classList.toggle('is-active');
	});
	// ====== [END] Toggle the sidebar on mobile version ======

	// ====== [BEGIN] Ripple Button Effect ======
	const root = document.documentElement;
	document.addEventListener("mousedown", ev => {
		let el = ev.target,
			top = 0,
			left = 0;
		// this loop to get every button on the page
		do {
			top += el.offsetTop;
			left += el.offsetLeft;
		} while (el = el.offsetParent);
		const x = (ev.clientX - left) / ev.target.offsetWidth;
		const y = (ev.clientY - top) / ev.target.offsetHeight;
		// give these values to CSS root element to feed them to 'left' & 'right' properties
		root.style.setProperty("--ripple-x", x);
		root.style.setProperty("--ripple-y", y);
	})
	// ====== [END] Ripple Button Effect ======
});
