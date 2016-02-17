'use strict'

var ServiceHandler = require(process.cwd()+'/app/controllers/serviceHandler.server.js');

module.exports = function (app) {

  var serviceHandler = new ServiceHandler();

  app.route('/')
      .get(function(req,res){
        res.sendFile(process.cwd()+'/public/index.html')
      });
  app.route('/:query')
      .get(serviceHandler.convertTime);
};
