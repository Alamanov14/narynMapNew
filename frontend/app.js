const map = document.getElementById('map');
let isDragging = false;
let startX, startY, currentX, currentY;

map.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - map.offsetLeft;
  startY = e.clientY - map.offsetTop;
  map.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  currentX = e.clientX - startX;
  currentY = e.clientY - startY;
  map.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  map.style.cursor = 'grab';
});
console.log("hello")
// const map = L.map('map').setView([41.483, 75.622], 8);  // Центр карты: Нарынская область

// // Добавляем слой карты
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Пример маркера для электростанции
// const elektrostation = L.marker([41.485, 75.623]).addTo(map);
// elektrostation.bindPopup("<b>Электростанция №1</b><br>Мощность: 50 МВт");

// // Пример маркера для агрофермы
// const agrofarm = L.marker([41.490, 75.620]).addTo(map);
// agrofarm.bindPopup("<b>Агроферма №1</b><br>Тип: Сельхозпродукты");

// // Слушаем изменение категории и фильтруем объекты
// document.getElementById('category').addEventListener('change', (event) => {
//     const category = event.target.value;
//     // Фильтрация объектов в зависимости от категории
//     if (category === 'electrostations') {
//         elektrostation.addTo(map);
//         agrofarm.removeFrom(map);
//     } else if (category === 'agrofarms') {
//         agrofarm.addTo(map);
//         elektrostation.removeFrom(map);
//     }
// });

// fetch('/api/objects')
//     .then(response => response.json())
//     .then(objects => {
//         objects.forEach(object => {
//             const marker = L.marker([object.lat, object.lon]).addTo(map);
//             marker.bindPopup(`<b>${object.name}</b><br>${object.description}`);
//         });
//     });
