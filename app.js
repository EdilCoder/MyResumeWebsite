const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Resume.pdf'));
});

app.use((req, res, next) => {
    res.status(404).send('Page Not Found.');
});

// start service
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Service processing: http://localhost:${PORT}`);
});
