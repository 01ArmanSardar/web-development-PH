const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        app.post('/user', async (req, res) => {
            const user = req.body
            const result = await UserCollection.insertOne(user)
            res.send(result)

        })

        app.get('/user', async (req, res) => {
            const filter = UserCollection.find()
            const result = await filter.toArray()
            res.send(result)
        })
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await UserCollection.deleteOne(query)
            res.send(result)
        })

        app.patch('/user', async (req, res) => {
            const user = req.body
            const filter = { email: user.email };
            const updateDoc = {
                $set: {
                    lastLoggedAt: user?.lastLoggedAt
                },
            };
            const result = await UserCollection.updateOne(filter, updateDoc)
            res.send(result)
        })



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    //     finally{
    // console.log('ok');
    //     }
    catch (err) {
        // console.log(`error occure ${err}`);
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('this is home page')
})

app.listen(port, (req, res) => {
    console.log(`this server open this  port ${port}`);
})