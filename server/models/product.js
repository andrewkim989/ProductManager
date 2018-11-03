var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter the name of the product"],
    minlength: [4, "Product name must be at least four characters long"]},
    price: {type: Number, required: [true, "Please type in the price of the product"]},
    image: {type: String}
}, {timestamps: true });

mongoose.model("Product", ProductSchema);