import express from 'express';
import connectToMongo from './db.js';
import auth from './routes/auth.js';

connectToMongo();
const app = express();
const port = 3300;

app.use(express.json());

app.use('/auth', auth);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});