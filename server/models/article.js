const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, require: true },
    date: { type: Date, require: true },
    url: { type: String, require: true },
    // saved: { type: Boolean, default: false }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;