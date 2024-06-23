const textBlock = document.getElementById('text-block');
const changeColorBtn = document.getElementById('change-color-btn');
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

let currentIndex = 0;
changeColorBtn.addEventListener('click', function() {
textBlock.style.color = colors[currentIndex];
currentIndex++;
if (currentIndex >= colors.length) {
    currentIndex = 0;
  }
});
