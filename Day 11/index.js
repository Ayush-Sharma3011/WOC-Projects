const express = require("express");

const app = express();

console.log(app);

let port= 8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.use((req,res)=>{
    console.log("Request received");
    res.send("This is the response");
});