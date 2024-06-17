document.addEventListener('DOMContentLoaded', function () {
    let cards = document.querySelectorAll('.card');
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
    let carouselStatus = document.getElementById('carouselStatus');
    let currentIndex = 0;

    function getCardsToShow() { // Функция для определения количества отображаемых карточек в зависимости от ширины экрана
        return window.innerWidth <= 1440 ? 1 : 6;
    }

    function updateCarousel() {
        let cardsToShow = getCardsToShow();
        let offset = -currentIndex * 100 / cardsToShow; // Вычисляем смещение для правильного отображения карточек

        cards.forEach(card => { // Применяем смещение к каждой карточке
            card.style.transform = `translateX(${offset}%)`;
        });

        carouselStatus.textContent = `${Math.min(currentIndex + cardsToShow, cards.length)}/${cards.length}`;
    }

    prevBtn.addEventListener('click', function () {
        const cardsToShow = getCardsToShow();
        // Перемещаемся к предыдущему набору карточек
        currentIndex -= cardsToShow;
        if (currentIndex < 0) {
            currentIndex = cards.length - cardsToShow;
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', function () {
        const cardsToShow = getCardsToShow();
        // Перемещаемся к следующему набору карточек
        currentIndex += cardsToShow;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    window.addEventListener('resize', function () {
        // Сбрасываем текущий индекс до начала на случай изменения количества отображаемых карточек
        currentIndex = 0;
        updateCarousel();
    });

    updateCarousel();
});
