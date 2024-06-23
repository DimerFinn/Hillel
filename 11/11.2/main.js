// Отримуємо необхідні елементи з DOM
const textBlock = document.getElementById('text-block');
const changeColorBtn = document.getElementById('change-color-btn');

// Масив з доступними кольорами
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

let currentIndex = 0; // Індекс поточного кольору

// Додаємо обробник події для кнопки
changeColorBtn.addEventListener('click', function() {
  // Змінюємо колір тексту
  textBlock.style.color = colors[currentIndex];
  
  // Збільшуємо індекс для наступного кольору
  currentIndex++;
  
  // Якщо досягли кінця масиву кольорів, повертаємося до початку
  if (currentIndex >= colors.length) {
    currentIndex = 0;
  }
});
