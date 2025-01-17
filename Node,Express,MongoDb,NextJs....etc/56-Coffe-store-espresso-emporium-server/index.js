const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    const Coffedatabase = client.db("1Coffedb");
    const CoffeCollection = Coffedatabase.collection("CofffeCollection");
    app.post('/coffe', async (req, res) => {

      const Newcoffe = req.body

      console.log(Newcoffe, 'in index.js file coffe added api');

      const result = await CoffeCollection.insertOne(Newcoffe);
      res.send(result)

    })
    app.delete('/coffe/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await CoffeCollection.deleteOne(query)
      res.send(result)
    })

    app.get('/coffe/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await CoffeCollection.findOne(query)
      res.send(result)
    })

    app.get('/coffe', async (req, res) => {
      const cursor = CoffeCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.put('/coffe/:id', async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const UpdateCoffe = req.body
      const coffe = {
        $set: {
          name: UpdateCoffe.name,
          chef: UpdateCoffe.chef,
          supplier: UpdateCoffe.supplier,
          taste: UpdateCoffe.taste,
          category: UpdateCoffe.category,
          details: UpdateCoffe.details,
          photo: UpdateCoffe.photo
        },

      };
      const result = await CoffeCollection.updateOne(filter, coffe)
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