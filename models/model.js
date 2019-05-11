// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var model = {
  all: function(cb) {
    orm.all("tableName", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("tableName", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tableName", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tableName", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (controller.js).
module.exports = model;
