const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// 定义要渲染的页面和目标输出目录
const pages = [
    { template: 'index.ejs', output: 'dist/index.html', data: { title: 'Home' } },
    { template: 'resume.ejs', output: 'dist/resume.html', data: { title: 'Resume' } },
    { template: 'projects/projects.ejs', output: 'dist/projects.html', data: {
            title: 'Projects',
            projects: [
                {
                    name: 'Android app for Graduation Dress Hire',
                    tech: 'Kotlin, Jetpack Compose, Navigation, Reposition, ROOM, Hilt, ViewModel, Firebase Authentication, Firestore',
                    summary: 'Say goodbye to the stress of graduation gown shopping; GownGrad is your one-stop solution for renting the perfect attire for your special day!',
                    img: '/images/GownGrad.png',
                    link: 'project1.html'  // 修改为指向静态 HTML 文件
                },
                {
                    name: 'TextReader - Vocabulary Analysis Tool',
                    tech: 'Java, Swing, Hashing Algorithms, N-gram Model',
                    summary: 'TextReader helps non-native English speakers enhance their reading experience by analyzing word frequencies.',
                    img: '/images/TextReader.png',
                    link: 'project2.html'  // 修改为指向静态 HTML 文件
                },
            ]
        }
    },
    { template: 'projects/project1.ejs', output: 'dist/project1.html', data: { title: 'Android App for Graduation Dress Hire' } },
    { template: 'projects/project2.ejs', output: 'dist/project2.html', data: { title: 'TextReader - Vocabulary Analysis Tool' } },
];

// 渲染每个页面
pages.forEach(page => {
    const templatePath = path.join(__dirname, 'views', page.template);
    const outputPath = path.join(__dirname, page.output);
    const outputDir = path.dirname(outputPath);

    // 读取 EJS 模板并渲染
    ejs.renderFile(templatePath, page.data, (err, str) => {
        if (err) {
            console.error(`Error rendering ${page.template}:`, err);
        } else {
            // 创建输出目录
            fs.mkdirSync(outputDir, { recursive: true });
            // 写入 HTML 文件
            fs.writeFileSync(outputPath, str);
            console.log(`${page.template} rendered to ${page.output}`);
        }
    });
});
