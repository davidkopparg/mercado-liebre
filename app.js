var express = require ("express");
var app = express();
app.listen(3030, () => console.log(`Server running in ${3030} port`));


app.get('/', function (req,res){

    res.sendFile(__dirname + "/views/index.html")
  
  })


  app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/" + req.url);
  });
