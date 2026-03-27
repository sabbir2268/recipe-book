require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
// connecting index.js to recipeRoutes
const recipeRoutes = require('./routes/recipes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@recipe-cluster.yecxkxw.mongodb.net/${process.env.DB_NAME}?appName=recipe-cluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");

    const recipesCollection = client.db(process.env.DB_NAME).collection('recipes');

    app.use('/recipes', recipeRoutes(recipesCollection));

  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

run();

app.get('/', (req, res) => {
  res.send('Recipe Book Server Is Running in browser');
});

app.listen(port, () => {
  console.log(`🚀 Recipe Book Server running on port ${port}`);
});

