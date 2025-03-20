const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config();
app.use(cors())
app.use(express.json())




const uri = process.env.SECRETURI

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
        const USerCollection = client.db('CareFistDb').collection('Users')

        app.post('/appionments', async (req, res) => {
            const user = req.body
            const result = await AppionmentCollection.insertOne(user)
            res.send(result)

        })
        app.post('/user', async (req, res) => {
            const userEmail = req.body
            const result = await USerCollection.insertOne(userEmail)
            res.send(result)
        })
        app.get('/user', async (req, res) => {
            const result = await USerCollection.find().toArray()
            res.send(result)
        })
        app.patch('/users/admin/:id',async(req,res)=>{
            const id =req.params.id
            const filter={_id :new ObjectId(id)}
            const UpdatedDoc ={
                $set:{
                    role:'admin'
                }
            }
            const result =await USerCollection.updateOne(filter,UpdatedDoc)
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