import express from "express";

const app = express();

app.get('/',(req, res)=>{
    return res 
        .json({
            "message":"you are in backend.nishant.com"
        })
});

app.listen(3000,()=>{

});

