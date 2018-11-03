var express = require("express");
var app = express();
app.use(express.static(__dirname + "/ProductManager/dist/ProductManager"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8567, function() {
    console.log("listening on port 8567");
});