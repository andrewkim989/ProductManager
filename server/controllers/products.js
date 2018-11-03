const mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = {
    all: function(req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({products});
            }
        })
    },

    show: function(req, res) {
        Product.findOne({_id: req.params.id}, function(err, product){
            if (err){
               console.log("Returned error", err);
               res.json({message: "Error", error: err});
            }
            else {
               res.json({product});
            }
        })
    },

    create: function(req, res) {
        var name = req.body.name;
        var price = req.body.price;
        var image = req.body.image;
        var product = new Product({name: name, price: price, image: image});

        product.save(function(err){
            if(err) {
                var e = [];
                for (var key in err.errors) {
                    var m = {};
                    m[key] = err.errors[key].message;
                    e.push(m);
                }
                res.json({error: e});
            }
            else {
                res.json({product});
            }
        });
    },

    update: function(req, res) {
        Product.findOne({_id: req.params.id}, function(err, product){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else {
                var name = req.body.name;
                var price = req.body.price;
                var image = req.body.image;

                product.name = name;
                product.price = price;
                product.image = image;

                product.save(function(err){
                    if(err){
                        var e = [];
                        for (var key in err.errors) {
                            var m = {};
                            m[key] = err.errors[key].message;
                            e.push(m);
                        }
                        res.json({error: e});
                    }
                    else {
                        res.json({product});
                    }
                });
            }
        });
    },

    delete: function (req, res) {
        Product.deleteOne({_id: req.params.id}, function (err) {
            if (err){
                res.json({message: "Error", error: err});
            }
            else {
                res.json({success: "Data deleted"});
            }
        })
    }
}