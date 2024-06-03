const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.cpft1zb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
mongoose.Promise = global.Promise;
const productRoutes = require('./api/routes/product');
const ordersRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');


app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*');
    res.header(
        "Access-Control-Allow-Origin",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header(
            "Access-Control-Allow-Origin",
            "PUT, POST, PATCH, DELETE, GET"  
        );
        return res.status(200).json({}); 
    }
    next();
})
// Routes
app.use('/products',productRoutes);
app.use('/orders',ordersRoutes);
app.use('/user',userRoutes);


module.exports = app;