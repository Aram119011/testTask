//
//
// // const express = require('express');
// // const app = express();
// // const PORT = 3000;
// //
// //
// //
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// //
// //
// //
// // app.use('/', )
// //
// //
// // // module.exports = app;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });
//
//
// // app.js
// const express = require('express');
// const app = express();
// const combinationRoutes = require('./routes/combinationRoutes');
//
// app.use(express.json());
//
// app.use('/', combinationRoutes);
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



// app.js
const express = require('express');
const bodyParser = require('body-parser');
const combinationRoutes = require('./routes/combinationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', combinationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
