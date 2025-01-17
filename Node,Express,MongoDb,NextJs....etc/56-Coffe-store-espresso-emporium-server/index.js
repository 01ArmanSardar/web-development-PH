const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.port || 5000;

//midelware
app.use(cors())
app.use(express.json())

const uri = process.env.URI



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

    // const database = client.db("COffeDb");
    // const coffeCollection = database.collection("CofffeList");
    // const doc = {
    //     title: "BestCoffe701",
    //     content: "this is good cofffe okkkkkkkkkkk",
    //   }
    //   const result = await coffeCollection.insertOne(doc);
    app.post('/coffe', async (req, res) => {

      const Newcoffe = req.body
      const Coffedatabase = client.db("1Coffedb");
      const CoffeCollection = Coffedatabase.collection("CofffeCollection");
      console.log(Newcoffe, 'in index.js file coffe added api');

      const result = await CoffeCollection.insertOne(Newcoffe);
      res.send(result)

    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.log('error occure ', err);
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('coffe server is done ')
})

app.listen(port, () => {
  console.log(`this server open in this port ${port}`);
})