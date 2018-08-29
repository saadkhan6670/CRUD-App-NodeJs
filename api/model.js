'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModuleSchema = new Schema ({
    ModuleName : { type: String },
    ModuleAlgo : { type: String },
    allfeatures : { type: Array },
    selectedfeatures : {type: Array },
    targetedfeatures : { type: Array },
    createdAt : {type: Date , default: Date.now()}

});

module.exports = mongoose.model('Modules', ModuleSchema);