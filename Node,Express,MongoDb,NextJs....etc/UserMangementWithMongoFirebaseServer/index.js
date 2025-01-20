const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
app.use(cors())
require('dotenv').config()
app.use(express.json())

const port = process.env.port || 5000



const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection

        const database = client.db("userdb");
        const UserCollection = database.collection("User");
        const doc = {
            title: 'arman22'
        }
        const result = await UserCollection.insertOne(doc)
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.log(`error occure ${err}`);
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('this is home page')
})

app.listen(port, (req, res) => {
    console.log(`this server open this  port ${port}`);
})