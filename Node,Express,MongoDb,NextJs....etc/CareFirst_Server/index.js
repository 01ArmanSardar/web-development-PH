const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config();
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
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const AppionmentCollection = client.db('CareFistDb').collection('Appionments')

        app.post('/appionments', async (req, res) => {
            const user = req.body
            const result = await AppionmentCollection.insertOne(user)
            res.send(result)

        })
    }

    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('this is careFirst Server')

})

app.listen(port, () => {
    console.log(`this server oppen inn this port ${port}`);
})