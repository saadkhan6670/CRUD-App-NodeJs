'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');


var ModuleSchema = new Schema ({
    ModuleName : { type: String },
    ModuleAlgo : { type: String },
    allfeatures : { type: Array },
    selectedfeatures : {type: Array },
    targetedfeatures : { type: Array },

});

module.exports = mongoose.model('Modules', ModuleSchema);