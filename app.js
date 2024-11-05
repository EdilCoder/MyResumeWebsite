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

    const projects = [
        {
            name: 'Android app for Graduation Dress Hire ',
            tech: 'Kotlin, Jetpack Compose, Navigation, Reposition, ROOM, Hilt, ViewModel, Firebase Authentication, Firestore',
            summary: 'Say goodbye to the stress of graduation gown shopping; GownGrad is your one-stop solution for renting the perfect attire for your special day! This Android app simplifies the process, allowing users to browse gowns based on their university and degree, manage orders, input body measurements, and handle payments—all from their mobile devices. Whether anonymous or registered, users can easily modify or delete orders. Make your graduation day special with GownGrad!',
            img: '/images/GownGrad.png',
            link: '/project1'
        },
        {
            name: 'TextReader - Vocabulary Analysis Tool',
            tech: 'Java, Swing, Hashing Algorithms, N-gram Model',
            summary: 'TextReader is a powerful tool designed to assist non-native English speakers in enhancing their reading experience. By extracting and analyzing the word frequencies of an English book, TextReader helps users identify and learn new vocabulary before they start reading, improving comprehension and fluency. This tool offers features like word frequency analysis using various hashing algorithms and prediction capabilities using N-gram models.',
            img: '/images/TextReader.png',
            link: '/project2'
        },
    ];

    res.render('projects/projects', { title: 'Projects', projects: projects });
});

app.get('/project1', (req, res) => {
    res.render('projects/project1', { title: 'Android App for Graduation Dress Hire' });
});

app.get('/project2', (req, res) => {
    res.render('projects/project2', { title: 'TextReader - Vocabulary Analysis Tool' });
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
