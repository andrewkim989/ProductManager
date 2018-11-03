var products = require("../controllers/products.js");
var path = require("path");

module.exports = function(app) {
    app.get("/prod", function(req, res) {
        products.all(req, res);
    });
    
    app.get("/prod/:id", function(req, res) {
        products.show(req, res);
    });
    
    app.post("/prod", function(req, res) {
        products.create(req, res);
    });
    
    app.put("/prod/:id", function(req, res) {
        products.update(req, res);
    });
    
    app.delete("/prod/:id", function(req, res) {
        products.delete(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./ProductManager/dist/ProductManager/index.html"));
    });
}