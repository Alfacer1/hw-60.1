const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

app.use(express.json());

// Головний маршрут
app.get('/', (req, res) => {
    res.send('Get root route');
});

// Підключення модульних маршрутів
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});