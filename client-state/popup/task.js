const modal = document.getElementById('subscribe-modal');
modal.classList.add('modal_active');

if (document.cookie.includes('modal__close=yes')) {
	modal.classList.remove('modal_active');
}

document.querySelector('.modal__close').addEventListener('click', function() {
	document.cookie = 'modal__close=yes; path=/';
	modal.classList.remove('modal_active');
});