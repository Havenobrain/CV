document.addEventListener('DOMContentLoaded', () => {
    // Удаляем класс 'open' у всех accordion-content при загрузке
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.classList.remove('open');
    });

    // Основной аккордеон для всех секций (например, "Projects")
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            // Переключение класса 'open' для плавного раскрытия/закрытия основного контента
            if (content) {
                content.classList.toggle('open');
            }
        });
    });
});

// Функция для вложенного аккордеона в Projects
function toggleProjectDescription(id) {
    const projectDescription = document.getElementById(id);

    // Переключение класса 'open' для плавного раскрытия/закрытия описания проектов
    if (projectDescription) {
        projectDescription.classList.toggle('open');
    }
}

