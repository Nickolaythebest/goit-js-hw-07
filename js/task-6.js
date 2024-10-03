function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Додаємо слухач події для кнопки Create
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value); // Отримуємо значення з input як число
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Викликаємо функцію створення елементів
    input.value = ''; // Очищаємо поле input після створення
  } else {
    alert('Please enter a number between 1 and 100'); // Попередження, якщо значення поза межами
  }
});

// Додаємо слухач події для кнопки Destroy
destroyBtn.addEventListener('click', destroyBoxes);

// Функція створення колекції квадратів
function createBoxes(amount) {
  destroyBoxes(); // Видаляємо попередні елементи, якщо такі є
  const elements = []; // Масив для нових елементів
  let size = 30; // Початковий розмір квадратів

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px'; // Відступи між квадратами
    elements.push(div); // Додаємо створений елемент у масив
    size += 10; // Збільшуємо розмір кожного наступного елементу на 10px
  }

  boxesContainer.append(...elements); // Додаємо всі елементи за одну операцію в DOM
}

// Функція очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера з квадратами
}