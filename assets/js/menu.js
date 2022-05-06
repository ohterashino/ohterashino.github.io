'use strict';
{
 
	// Hamburger menu
	const open = document.getElementById('open');
	const overlay = document.querySelector('.overlay');
	const close = document.getElementById('close');
	
	open.addEventListener('click', () => {
		overlay.classList.add('show');
		open.classList.add('hide');
	});
	
	close.addEventListener('click', () => {
		overlay.classList.remove('show');
		open.classList.remove('hide');
	});
	// Hamburger menu End


	// swiper1
var mySwiper = new Swiper('.swiper1', {
	effect: 'fade',
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});
// swiper1 End


// swiper2
const swiper = new Swiper(".swiper2", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
	breakpoints: {
		1140: {
			slidesPerView: 4
		},
    960: {
			slidesPerView: 3
		},
    540: {
			slidesPerView: 2
		},
		0: {
			slidesPerView: 1
		}
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
// swiper2 End





// swiper2 favorite_btn

document.addEventListener('DOMContentLoaded',()=>{

	let changeData = {
		'button1' : {
			txt:'お気に入り<br />解除',
			img:'assets/img/icon/pinCheck.png'
		} ,
		'button2' : {
			txt:'お気に入り<br />解除',
			img:'assets/img/icon/pinCheck.png'
		} ,
		'button3' : {
			txt:'お気に入り<br />解除',
			img:'assets/img/icon/pinCheck.png'
		} ,
		'button4' : {
			txt:'お気に入り<br />解除',
			img:'assets/img/icon/pinCheck.png'
		} ,
		'button5' : {
			txt:'お気に入り<br />解除',
			img:'assets/img/icon/pinCheck.png'
		}
	};
	
	document.querySelectorAll('.favoritebtn').forEach(btn=>{
		let id = btn.id;
		let txt = btn.querySelector('p'); 
		let img = btn.querySelector('img'); 
		let flg = false;
		let df = {
			txt: txt.innerHTML,
			img: img.src
		};
		btn.addEventListener('click',()=>{
			let data = flg ? df : changeData[id];
	
			txt.innerHTML = data.txt;
			img.src = data.img;
			flg = !flg;
		});
	});
	
	});


// swiper2 favorite_btn End


// scrolle icon
// Intersection Observer API

function inViewCallback(entries, obs) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
		return;
		}

		entry.target.classList.add('appear');
		obs.unobserve(entry.target);
	});
}

function onScrollCallback(entries) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			toTop.classList.add('scrolled');
		} else {
			toTop.classList.remove('scrolled');
		}
	});
}

const toTop = document.getElementById('to_top');

const inViewObserver = new IntersectionObserver(inViewCallback, {
	threshold: 1,
});

const onScrollObserver = new IntersectionObserver(onScrollCallback);
onScrollObserver.observe(document.getElementById('target'));

toTop.addEventListener('click', e => {
	e.preventDefault();

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});


// scrolle icon End


}
