    const modalInner = document.querySelector('.modal__inner');
    const modal = document.querySelector('.modal')
    const modalClose = document.querySelector('.modalClose');



    modalClose.addEventListener('click', () => {
        modal.style.display = '';
        console.log('click')
    })