const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const port = 7900 ;
const db = require('./db')
const router = require('./routes/index')

//cors
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))

app.use((req,res,next)=>{
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
})

//routes

app.use('/api', router) ;

app.use('/uploads', express.static(path.join(__dirname, "../uploads")))
app.use(express.static(path.join(__dirname, "../frontend/build")))

app.get("*", (req, res) => {
    try{
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    }
    catch(e){
        res.send("Unexpected error");
    }
});

app.use(cors())
db.connect();

//server listen 
app.listen(port , ()=>{
    console.log(`server listening on port ${port}`)
})
