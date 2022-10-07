var express = require('express');
var router = express.Router();

/* GET home page. */
function createRoutes(theDirectory, namePage, titlePage){
  router.get(theDirectory, function(req, res, next) {
    res.render(namePage, { title: titlePage });
  });
}
createRoutes('/', 'index', 'Vica Ds');
createRoutes('/colors', 'colors', 'Vica Ds - Colors');
createRoutes('/animations', 'animation', 'Vica Ds - Animations');
createRoutes('/typo', 'typo', 'Vica Ds - Typo');
createRoutes('/spacing', 'spacing', 'Vica Ds - Spacing');
createRoutes('/whats_new', 'news', 'Vica Ds - News');
createRoutes('/grid', 'grid', 'Vica Ds - Grid');
createRoutes('/navbar', 'components/navbar', 'Vica Ds - Navbar');
createRoutes('/principios', 'principios', 'Vica Ds - Principios');


module.exports = router;
