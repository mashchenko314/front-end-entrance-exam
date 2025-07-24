export function addWaveEffect(e) {
    // Создаем элемент для эффекта
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');

    // Позиционируем относительно контейнера
    const container = this.parentNode;
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Устанавливаем стили
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    // Добавляем в DOM
    container.appendChild(ripple);

    // Удаляем после завершения анимации
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });

};