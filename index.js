

const express = require('express');
const ProductsRouter = require('./Router/routerBlog');
const brandsRouter = require('./Router/routerBrand'); 
const catagoryRouter = require('./Router/routerCatagory');
          require('dotenv').config();
          
const cart = require('./Router/routerCart')
const order = require('./Router/routerOrder')
const user= require('./Router/routerUser');
const size = require('./Router/routersize');
const review = require('./Router/routerReview')
const app = express();
const  cors = require('cors')
app.use(cors());
app.use('/Images', express.static(__dirname + '/Images'));

app.use(express.json())
app.use('/products',ProductsRouter)
app.use('/brands',brandsRouter )
app.use('/catagory',catagoryRouter  )
app.use('/cart', cart);
app.use('/order',order )
app.use('/users', user);
app.use('/size',size );
app.use('/review',review )
const mongoose = require('mongoose');

const mongoPassowrd = process.env.superPassword;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://RajdeeepsadhuDB:${mongoPassowrd}@cluster0.z1akzwi.mongodb.net/?retryWrites=true&w=majority`);
  console.log("MongoDb connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(8080, ()=>{
    console.log("Server is Running in the port 8080")
})

