const express = require("express")
const app = express()
app.use(express.json())

const memes = [] //local sotrage

app.post("/memes", (req, res)=> {
    const meme = req.body  //req being what user sends  
    memes.push(meme)       //and res what we send from our side 
    res.send("saved")
});

app.get ("/", (req, res)=>{
    res.json(memes)
}); //gets data from json

app.listen(3000, () => {
    console.log("server is running")
});

//this is the basics of routing and server for now