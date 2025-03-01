const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config() 
const User = require('./model/User');
const bcryptjs = require('bcryptjs')


//server creation 
const app = express()
const port = 3000;
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is listning at http://localhost:${port}`);
} 
)

//Database connection
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("DB is connected successfuly"); 
    }
).catch(
    (err)=>{
        console.log("Database connection Error",err);  
    }
)

//registering a user
app.use(express.json());

app.post('/register', async(req,res)=>{
    const {username,email,password} = req.body;
    try {
        const Hashedpassword = await bcryptjs.hash(password,10)
        const user = new User({username,email,password:Hashedpassword});
        await user.save();
        res.json({message:"User registered"})
        console.log("User registered successfully");
    }catch (error) {
        console.log('Error while registration',error);
    }
})

//Loggging a user
app.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email});
        if (!user || !(await bcryptjs.compare(password,user.password))) {
            console.log("invalid credentials");
            return res.status(400).json({message:'invalid credentails'});
    
        } else {
            console.log("logging successfully");
            return res.json({message:'Logging successfully',username:user.username})
        }
    } catch (error) {
        console.log('Error in logging a user',error);
    }
})
