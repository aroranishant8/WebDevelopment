const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname+"/bmicalculator.html")
})

//gets our app to use it
app.use(bodyparser.urlencoded({extended:true}));


app.post('/bmicalculator',(req,res) => {
console.log(req.body);
var weight=parseFloat(req.body.weight);
var height=parseFloat(req.body.height);
var bmi=weight/(height*height);
res.send("Your bmi is "+bmi);

});



app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})
