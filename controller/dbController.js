
let mongo = require('mongodb');
let {MongoClient} = require('mongodb');  // importing client
let mongoUrl = "mongodb+srv://effizient_assignment:WrFOGEv3pybUsN4a@cluster0.ttokmgk.mongodb.net/?retryWrites=true&w=majority";  // specifying url
"mongodb+srv://puma_website:oXt7YWLL4Z299Btz@cluster0.ttokmgk.mongodb.net/?retryWrites=true&w=majority"
let client = new MongoClient(mongoUrl);  // connect with client

// its a function to connect with the client
async function dbConnect(){
    await client.connect()
}

// it will tell database name
let db = client.db('job_application');

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data);
    }
    catch(err){
        output = {"response":"Error in postData"}
    }
    return output;
}

module.exports = {
    dbConnect,
    postData
}