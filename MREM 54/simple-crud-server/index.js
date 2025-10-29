const express = require("express")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app =express();
const cors = require('cors');
const port =process.env.PORT || 3000;

const uri = "mongodb+srv://asifDBUser:JGYAQg9j3Q4wAEhM@cluster0.clghzkh.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// middleware
app.use(cors());
app.use(express.json());


// /asifDBUser
//JGYAQg9j3Q4wAEhM


app.get("/",(req,res)=>{
    res.send("server is running")
})


async function run(){
    try {
        await client.connect();
        const usersDB =client.db('usersDB');
        const usersCollection=usersDB.collection('users')


        //add database related api here


        app.get("/users",async(req,res)=>{
            const cursor =usersCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get("/users/:id",async(req,res)=>{
            const id =req.params.id;
            const query ={_id: new ObjectId(id)}
            const result= await usersCollection.findOne(query)
            res.send(result)
        })

        app.delete('/users/:id',async(req,res)=>{
            console.log(req.params.id);
            // console.log();
            const id=req.params.id
            const query={_id: new ObjectId(id)}
            const result = await usersCollection.deleteOne(query)
            res.send(result)
            
            
            console.log("deleted");
            
        })

        app.post('/users',async(req,res)=>{
            console.log('hitting the user post api');
            const newUser=req.body;
            console.log("user info",newUser);
            const result =await usersCollection.insertOne(newUser);
            res.send(result)
            
            
        })

        await client.db("admin").command({ping:1})
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
    } 
    finally{
        //awat client.clos e()
    }
}
run().catch(console.dir)


app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})


// try {
    
// } catch (error) {
    
// }
// finally{

// }

// async function run(){
//     // await
// }
// run().catch(console.dir)
