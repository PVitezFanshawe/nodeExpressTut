const express = require('express');
const path = require('path');


//init app
const app = express();

//load view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', (req, res) => {
    let article = [
        {
            id: 1,
            title: 'article one',
            author: 'john smith',
            body: 'klgahsdfghasdhkfjlasdkljhfkjlsadhkfljhs'
        },
        {
            id: 2,
            title: 'article two',
            author: 'bob',
            body: 'klgahsdfghasdhkfjlasdkljhfkjlsadhkfljhs'
        },
        {
            id: 3,
            title: 'article three',
            author: 'john smith',
            body: 'klgahsdfghasdhkfjlasdkljhfkjlsadhkfljhs'
        }
    ];
    res.render('index', {
        title: 'Articles',
        articles: article
    });
});

//add route
app.get('/articles/add', (req, res)=>{
    res.render('add_article',{
        title: 'add article'
    });
});

//start server
app.listen(3000, () =>{
    console.log('server started on port 3000');
});