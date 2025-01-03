const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.listen(3000);
