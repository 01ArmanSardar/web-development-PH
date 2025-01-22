const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const port = process.env.port || 5000

const URi = process.env.URI



const uri = URi;

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
        const database = client.db("Travel_Friend");
        const TouristSpotCollection = database.collection("TouristSpot");

        app.get('/touristSpot', async (req, res) => {
            const filter = TouristSpotCollection.find()
            const result = await filter.toArray()
            res.send(result)
        })
        app.get('/touristSpot/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await TouristSpotCollection.findOne(query)
            res.send(result)
        })
        // add toursit spot data below
        // const options = { ordered: true };
        // const doc =
        //     [
        //         {
        //             name: "Eiffel Tower",
        //             location: "Paris, France",
        //             description: "One of the world's most iconic landmarks, offering stunning views of Paris.",
        //             image: "https://example.com/eiffel-tower.jpg",
        //             category: "Cityscape",
        //             rating: 4.9,
        //             facilities: ["Restaurants", "Guided Tours", "Photography Spots"],
        //             ticketPrice: 25,
        //             availableDates: ["2025-01-10", "2025-01-20"],
        //             nearbyAttractions: ["Louvre Museum", "Notre Dame Cathedral"],
        //             bestSeason: "Spring"
        //         },
        //         {
        //             name: "Colosseum",
        //             location: "Rome, Italy",
        //             description: "A masterpiece of ancient Roman architecture, a must-see for history enthusiasts.",
        //             image: "https://example.com/colosseum.jpg",
        //             category: "Historical",
        //             rating: 4.8,
        //             facilities: ["Guided Tours", "Museum Access", "Gift Shops"],
        //             ticketPrice: 30,
        //             availableDates: ["2025-02-01", "2025-02-28"],
        //             nearbyAttractions: ["Roman Forum", "Pantheon"],
        //             bestSeason: "Autumn"
        //         },
        //         {
        //             name: "Neuschwanstein Castle",
        //             location: "Bavaria, Germany",
        //             description: "A fairy-tale castle nestled in the Bavarian Alps, perfect for a romantic getaway.",
        //             image: "https://example.com/neuschwanstein-castle.jpg",
        //             category: "Historical",
        //             rating: 4.7,
        //             facilities: ["Guided Tours", "Photography Spots", "Cafeteria"],
        //             ticketPrice: 20,
        //             availableDates: ["2025-03-01", "2025-03-15"],
        //             nearbyAttractions: ["Hohenschwangau Castle", "Alpsee Lake"],
        //             bestSeason: "Summer"
        //         },
        //         {
        //             name: "Santorini Island",
        //             location: "Santorini, Greece",
        //             description: "A picturesque island known for its whitewashed buildings and stunning sunsets.",
        //             image: "https://example.com/santorini-island.jpg",
        //             category: "Beach",
        //             rating: 4.8,
        //             facilities: ["Beach Access", "Luxury Resorts", "Boat Tours"],
        //             ticketPrice: 15,
        //             availableDates: ["2025-05-01", "2025-05-31"],
        //             nearbyAttractions: ["Oia Village", "Red Beach"],
        //             bestSeason: "Summer"
        //         },
        //         {
        //             name: "Big Ben",
        //             location: "London, United Kingdom",
        //             description: "An iconic clock tower and symbol of British culture, located near the Thames.",
        //             image: "https://example.com/big-ben.jpg",
        //             category: "Cityscape",
        //             rating: 4.6,
        //             facilities: ["Photography Spots", "Guided Tours"],
        //             ticketPrice: 15,
        //             availableDates: ["2025-04-01", "2025-04-15"],
        //             nearbyAttractions: ["London Eye", "Westminster Abbey"],
        //             bestSeason: "Spring" 
        //         },
        //         {
        //             name: "Lake Bled",
        //             location: "Bled, Slovenia",
        //             description: "A serene lake surrounded by mountains, featuring a charming island church.",
        //             image: "https://example.com/lake-bled.jpg",
        //             category: "Nature",
        //             rating: 4.9,
        //             facilities: ["Boat Rentals", "Photography Spots", "Hiking Trails"],
        //             ticketPrice: 10,
        //             availableDates: ["2025-06-01", "2025-06-30"],
        //             nearbyAttractions: ["Bled Castle", "Vintgar Gorge"],
        //             bestSeason: "Summer"
        //         },
        //         {
        //             name: "Charles Bridge",
        //             location: "Prague, Czech Republic",
        //             description: "A historic bridge adorned with statues, offering views of Prague's skyline.",
        //             image: "https://example.com/charles-bridge.jpg",
        //             category: "Cityscape",
        //             rating: 4.7,
        //             facilities: ["Street Performers", "Photography Spots", "Cafes Nearby"],
        //             ticketPrice: 0, // Free
        //             availableDates: ["2025-01-01", "2025-12-31"],
        //             nearbyAttractions: ["Prague Castle", "Old Town Square"],
        //             bestSeason: "Autumn"
        //         },
        //         {
        //             name: "Aurora Borealis",
        //             location: "Tromsø, Norway",
        //             description: "A breathtaking natural phenomenon visible in the Arctic Circle during winter.",
        //             image: "https://example.com/aurora-borealis.jpg",
        //             category: "Nature",
        //             rating: 5.0,
        //             facilities: ["Guided Tours", "Warm Lodges", "Photography Spots"],
        //             ticketPrice: 50,
        //             availableDates: ["2025-01-01", "2025-02-28"],
        //             nearbyAttractions: ["Arctic Cathedral", "Polar Museum"],
        //             bestSeason: "Winter"
        //         },
        //         {
        //             name: "Dubrovnik Old Town",
        //             location: "Dubrovnik, Croatia",
        //             description: "A medieval walled city with cobblestone streets and stunning Adriatic views.",
        //             image: "https://example.com/dubrovnik.jpg",
        //             category: "Historical",
        //             rating: 4.8,
        //             facilities: ["Guided Tours", "Restaurants", "Souvenir Shops"],
        //             ticketPrice: 20,
        //             availableDates: ["2025-05-01", "2025-05-31"],
        //             nearbyAttractions: ["Lokrum Island", "City Walls"],
        //             bestSeason: "Spring"
        //         },
        //         {
        //             name: "Hallstatt Village",
        //             location: "Hallstatt, Austria",
        //             description: "A charming lakeside village surrounded by the Austrian Alps, known for its beauty.",
        //             image: "https://example.com/hallstatt.jpg",
        //             category: "Nature",
        //             rating: 4.9,
        //             facilities: ["Boat Rentals", "Photography Spots", "Cafes"],
        //             ticketPrice: 15,
        //             availableDates: ["2025-06-01", "2025-06-30"],
        //             nearbyAttractions: ["Salt Mines", "Dachstein Ice Caves"],
        //             bestSeason: "Summer"
        //         }
        //     ]
        // const result = await TouristSpotCollection.insertMany(doc, options);
        // console.log(`${result.insertedCount} d ocument s were inserted `);




        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(" Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.log(err);
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('this is travel friend server home done ')

})


app.listen(port, () => {
    console.log(`this server open on this port ${port}`);
})