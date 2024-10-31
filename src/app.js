
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
