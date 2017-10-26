var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var pageStyles = [
        "css/bootstrap.min.css",
        "css/style.css",
        "css/responsive.css"
    ];

    var beforePageJS = [
        "https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js",
        "https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"
    ];

    var afterPageJS = [
        "js/jquery.min.js",
        "js/bootstrap.min.js",
        "js/css3-animate-it.js",
        "js/bootstrap-dropdownhover.min.js",
        "js/owl.carousel.min.js",
        "js/gallery.js",
        "js/player.min.js",
        "js/comming-soon.js",
        "js/script.js"
    ];

    var pageData = {
        title: "Raising a Nation Foundation | Home",
        pageStyles: pageStyles,
        beforePageJS: beforePageJS,
        afterPageJS: afterPageJS
    };

    res.render('index', pageData);
});

module.exports = router;
