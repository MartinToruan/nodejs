const express = require('express');

const app = express();

// app.use((req, resp, next) => {
//     console.log("This is from middleware");
//     next();
// });

// app.use((req, resp, next) => {
//     console.log("This is from another middleware");
//     resp.send(<p>Assignment solved!</p>);
// })

app.use('/users', (req, resp, next) => {
    resp.send("<h1>Users page</h1>");
})

app.use('/', (req, resp, next) => {
    resp.send("<h1>Default Page</h1>");
})

app.listen(4000);