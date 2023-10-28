const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send("welcome")
})




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atikx007:Atikx007@cluster0.6zrickh.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})
async function loadData() {
  await client.connect();

  const userCollections = client.db('Atikx007').collection('users')
  
  app.post('/user', async (req, res) => {
    const data = req.body;
    const response = await userCollections.insertOne(data);
    res.send(response)
 })


 }
loadData()




app.listen(4500, ()=>{
  console.log("listening on port")
})