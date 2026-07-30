const lines = document.querySelectorAll('.line');

lines.forEach((line) => {
    const images = line.innerHTML; // Получаем содержимое карусели  
    line.innerHTML += images; // Дублируем содержимое для непрерывной ленты  
});