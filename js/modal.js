const modalFaq = document.querySelector('.openFaqModal')
const modal = document.querySelector('.modal')
const modalHide = document.querySelector('.modal__inner')

modalFaq.addEventListener('click', function(event) {
    event.preventDefault(modalFaq);
    modal.style.display = 'flex';


})