import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/router.js';
import bcrypt from 'bcrypt';
import pg from 'pg';
import {Session} from 'express-session';
import {Strategy} from 'passport-local';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use(router);

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});