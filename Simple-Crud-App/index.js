const express = require('express')
//Connects mongodb to mongoose part 1 of 2
const mongoose = require('mongoose');

//imports product model schema
const Product = require('./models/product.model.js');

//IMPORTS PRODUCT ROUTE INFO/CONTENT
const productRoute = require('./routes/product.route.js')

const app = express();

//middleware allowing us to communicate server and DB in json format
app.use(express.json());

//MIDDLEWARE allowing us to communicate server and DB in Form url encoded format
app.use(express.urlencoded({extended: false}));

                                                        // ROUTES
//CONNECTS THE ROUTER TO THE INDEX 
//SERVES AS THE ADDRESS PART OF THE API 
//SIMPLY PUT ITS THE ADDRESS PART OF a set of rules like 
// app.put("THIS PART!!", async(req, res))
app.use('/api/products', productRoute)


const Port = 3000


app.listen(Port, () => {
    console.log(`Server is running on Port ${Port}`)
});


app.get('/', (req, res) => {
    res.send('hello from node api server \n Who are You strangers');
});


//connects mongoDB to mongoose part 2 of 2
mongoose.connect('mongodb+srv://zwelakheyende11:SYlysYQX3BlWsnum@cluster0-crudapp-backen.qgaiz.mongodb.net/')
  .then(() => console.log('Database: Connected!'))
 .catch(() => {
    console.log('Database: Connection failed!')
  });
