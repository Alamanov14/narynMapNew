const express = require('express');
const app = express();
const port = 3000;

// Простое API для получения объектов
app.get('/api/objects', (req, res) => {
    const objects = [
        { id: 1, name: 'Электростанция №1', type: 'electrostations', lat: 41.485, lon: 75.623, description: 'Мощность: 50 МВт' },
        { id: 2, name: 'Агроферма №1', type: 'agrofarms', lat: 41.490, lon: 75.620, description: 'Тип: Сельхозпродукты' },
        // добавьте дополнительные объекты
    ];
    res.json(objects);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
