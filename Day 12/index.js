const express = require('express');
const app = express();

const port = 3000;
app.listen(port, ()=>{
    console.log("The app is listening on " + port);
})

app.use(logger);

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/user',auth,(req,res)=>{
    res.send("users page");
})

function logger(req,res, next){
    console.log('log');
    next();
}

function auth(req,res, next){
    if(req.query.admin === 'true'){
        next()
    }else{
        res.send("No auth");
    }
}