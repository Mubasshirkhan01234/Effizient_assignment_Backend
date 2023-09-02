let express = require('express');
let app = express();
let port = process.env.PORT||2122;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,postData} = require('./controller/dbController');

// Middleware(supporting library)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

// This is api
app.get('/',(req,res)=>{
    res.send('hii from express')
})

// Place order
app.post('/placeApplication', async (req,res) => {
    let data = req.body;
    let collection = "application";
    // console.log(">>>",data)
    let response = await postData(collection, data)
    res.send(response)
})

//This is server
app.listen(port,(err)=>{
    dbConnect()
    if(err) throw err;
    console.log(`server in running on port ${port}`)
})