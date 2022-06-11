const modalFaq = document.querySelector('.openFaqModal')
const modal = document.querySelector('.modal')
const modalHide = document.querySelector('.modal__inner')

modalFaq.addEventListener(('click'), () => {
    modal.style.display = 'flex';
    console.log('click')
})


modal.addEventListener(('click'), (event) => {
    const modalContent = event.target.closest('.modal__inner')

    if (!modalContent) {
        modal.style.display = '';
    }


})