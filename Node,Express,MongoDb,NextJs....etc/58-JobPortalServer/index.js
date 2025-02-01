const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())





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

        const JobsCollection = client.db('JobPortal').collection('Jobs')
        const JobsApplicationCollection = client.db('JobPortal').collection('JobsApplication')

        app.get('/jobs', async (req, res) => {
            const email = req.query.email
            let query = {}
            if (email) {
                query = { HrEmail: email }
            }
            const cursor = JobsCollection.find(query)
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await JobsCollection.findOne(query)
            res.send(result)
        })
        app.post('/ApplyJobs', async (req, res) => {
            const applicantInfo = req.body
            const result = await JobsApplicationCollection.insertOne(applicantInfo)
            res.send(result)
        })
        app.post('/jobs', async (req, res) => {
            const data = req.body
            const result = await JobsCollection.insertOne(data)
            res.send(result)
        })
        app.get('/applyjobs/jobs/:job_id', async (req, res) => {
            const jobid = req.params.job_id
            const query = { job_id: jobid }
            const result = await JobsApplicationCollection.find(query).toArray()
            res.send(result)
        }
        )

        app.patch('/ApplyJobs/:id', async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const data = req.body
            const updateDoc = {
                $set: {
                    status: data
                },
            };
            const result = await JobsApplicationCollection.updateOne(filter, updateDoc)
            res.send(result)

        })
        app.get('/ApplyJobs', async (req, res) => {
            const email = req.query.email
            const filter = { ApplicantEmail: email }
            const result = await JobsApplicationCollection.find(filter).toArray()


            //cheap way getting data from database

            for (const Application of result) {
                console.log(Application.job_id);
                const query1 = { _id: new ObjectId(Application.job_id) }
                const job = await JobsCollection.findOne(query1)
                if (job) {
                    Application.title = job.title
                    Application.company = job.company
                    Application.company_logo = job.company_logo
                    Application.location = job.location

                }

            }
            res.send(result)
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.log(err);
    }
    // finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    // }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('this is jobPortal server Home page')
})

app.listen(port, () => {
    console.log(`this server open on this port ${port}`);
})