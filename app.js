const express = require('express');
const db = require("./db/queries")
const homeRouter = require('./routers/homeRouter')
const signupRouter = require('./routers/signupRouter');
const session = require("express-session");
const bcrypt = require('bcryptjs');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;


require('dotenv').config();


const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            console.log("local strategy");
            const user = await db.memberSearch(username);
            console.log(user);
            if (!user) {
                return done(null, false, { message: "Wrong username" })
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return done(null, false, { message: "Wrong password" })
            }
            return done(null, user)
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done)=>{
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = db.memberSearchID(id);
        done(null, user);
    } catch(err) {
        done(err);
    }
});



app.use('/', homeRouter);
app.use('/sign-up', signupRouter);

app.listen(3000, console.log("We are live"));