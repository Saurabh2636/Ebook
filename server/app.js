const express= require('express')
const logger= require('morgan')
const cors=require('cors')
const app= express()
const connectDB=require('./config/db');
const books=require('./routes/api/books')
const schema= require('./models/schema');

connectDB();
app.use(
    cors({
    origin:'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
    })
);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>res.send('Hello World!!'));
app.use('/api/books',books);
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`http://localhost:${port}`))
