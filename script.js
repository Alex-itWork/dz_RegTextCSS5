// script.js

// Функция для переключения видимости списка работ Эйнштейна
function toggleWorksList() {
    const worksList = document.querySelector('.works-list');
    if (worksList.style.display === "none" || worksList.style.display === "") {
        worksList.style.display = "block";
    } else {
        worksList.style.display = "none";
    }
}

// Установка обработчика события для заголовка
const mainHeader = document.querySelector('.main-header');
mainHeader.addEventListener('click', toggleWorksList);

// Настройка начального состояния списка
document.addEventListener('DOMContentLoaded', () => {
    const worksList = document.querySelector('.works-list');
    worksList.style.display = "none"; // Скрываем список при загрузке страницы
});