'use strict';
 
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
		1140: {slidesPerView: 4},
    960: 	{slidesPerView: 3},
    540: 	{slidesPerView: 2},
		0: 		{slidesPerView: 1}
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
// swiper2 End





// swiper2 favorite_btn

document.addEventListener('DOMContentLoaded',()=>{
  
	//   複数のフラグを管理するための配列を定義
		let flags = [];
	//   対象となる要素の配列を取得し、forEachでそれぞれをelementという変数に代入しつつ中の関数を繰り返す
		document.querySelectorAll('.favoritebtn').forEach(element=>{
	//     フラグ配列に要素を追加し、それをフラグという変数に代入
			let flag = flags.push(false);
			let txt = element.querySelector('p'); 
			let img = element.querySelector('img'); 
	//     要素がクリックされたら
			element.addEventListener('click',()=>{
	//       フラグがtrueの場合はON, falseの場合はOFFにinnerHTMLを変更
	if(flag){
		txt.innerHTML = 'お気に入り<br>解除';
		img.src = 'assets/img/icon/pinCheck.png';
	} else {
		txt.innerHTML = 'お気に入りに<br>追加';
		img.src = 'assets/img/icon/pinUncheck.png';
	}
	//       フラグの真偽値を反転させる
				flag = !flag;
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




// ---------- demo ---------






