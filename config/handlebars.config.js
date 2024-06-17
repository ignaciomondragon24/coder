const handlebars = require("express-handlebars");
const paths = require("../utils/paths.js");

const config = (app) => {
    app.engine("handlebars", handlebars.engine());
    app.set("views", paths.views);
    app.set("view engine", "handlebars");
};

module.exports = config;