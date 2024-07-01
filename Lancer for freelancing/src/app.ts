import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import userroutes from './routes/userroutes';
import postroutes from './routes/postroutes';
import authroutes from './routes/authroutes';
import adminroutes from './routes/adminroutes';
import proposalroutes from './routes/proposalroutes';
import { createConnection } from 'typeorm';
import 'reflect-metadata';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Note: Use 'true' if using https
}));

app.use('/api/users', userroutes);
app.use('/api/posts', postroutes);
app.use('/api/auth', authroutes);
app.use('/admin', adminroutes);
app.use('/api/proposal',proposalroutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
