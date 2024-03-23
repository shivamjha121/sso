import express from 'express';
import connectDB  from './db.js';
import apiRoutes from './routes/index.js';
import cors from 'cors'
import session from 'express-session';
import passport from 'passport';
import './passport.auth';
const app: express = express();
const port: number = 3000;
var url:string;
 connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('view'));


app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    // res.send('Hello World!');
    url=req.query.url
    
    res.sendFile('view/index.html');    
});

app.use('/api',apiRoutes)

//google login
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
   
    res.redirect('/home');
  });

app.get("/home", (req, res) => {

    res.json({ success: true, user: req.user });
})


//facebook login
//facebook
app.get('/auth/facebook',
// passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends', 'manage_pages'] }));
  passport.authenticate('facebook' ));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });


  app.post('/login', 
  
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    console.log(req.user);
    res.redirect('/home');
  });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

export {url};