
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const connectDatabase = require('./config/connectDatabase')
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./router/product')
const orders = require('./router/order')
connectDatabase(); 
app.use(express.json())
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.listen(process.env.PORT, ()=>{
    console.log(`The server is listning port ${process.env.PORT} and ${process.env.NODE_ENV}`);
})
