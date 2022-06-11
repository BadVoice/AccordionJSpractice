document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.querySelector('.modalClose');
    const modalInner = document.querySelector('.modal__inner')

    modalInner.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const modalClose = self.querySelector('.modalClose');

            modalClose.addEventListener('click', () => {
                modal.style.display = '';
            })



            // self.classList.toggle('open');

            // // если открыт аккордеон
            // if (self.classList.contains('open')) {
            //     control.setAttribute('aria-expanded', true);
            //     content.setAttribute('aria-hidden', false);
            // } else {
            //     control.setAttribute('aria-expanded', false);
            //     content.setAttribute('aria-hidden', true);
            // }
        });
    });
});