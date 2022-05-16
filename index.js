const express =require('express');



const app = express()

const PORT = 9000

app.use(express.static('public'))


app.listen(PORT, () =>{
    console.log("port running on 9000")
})