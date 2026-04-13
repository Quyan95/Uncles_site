document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-btn');
    const modal = document.querySelector('.modal');

    // Открыть модалку
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Закрыть модалку при клике на фон (вне модалки)
    document.addEventListener('click', (e) => {
        if (modal.classList.contains('show') && 
            !burger.contains(e.target) && 
            !modal.contains(e.target)) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});