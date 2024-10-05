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
            link: '/test1'
        },
        {
            name: 'Android app for Graduation Dress Hire ',
            tech: 'Kotlin, Jetpack Compose, Navigation, Reposition, ROOM, Hilt, ViewModel, Firebase Authentication, Firestore',
            summary: 'Say goodbye to the stress of graduation gown shopping; GownGrad is your one-stop solution for renting the perfect attire for your special day! This Android app simplifies the process, allowing users to browse gowns based on their university and degree, manage orders, input body measurements, and handle payments—all from their mobile devices. Whether anonymous or registered, users can easily modify or delete orders. Make your graduation day special with GownGrad!',
            img: '/images/GownGrad.png',
            link: '/test2'
        },
    ];

    res.render('projects', { title: 'Projects', projects: projects });
});

app.get('/test1', (req, res) => {
    res.render('test1', { title: 'Android App for Graduation Dress Hire' });
});

app.get('/test2', (req, res) => {
    res.render('test2', { title: 'Android App for Graduation Dress Hire' });
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
