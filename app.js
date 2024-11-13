const express = require('express');
const path = require('path');
const errorController = require('./controllers/error');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getError);
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
