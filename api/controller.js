var mongoose = require('mongoose');
var Modules = mongoose.model('Modules');




exports.getModule = (req, res, next) => {

Modules.find({}, (err, doc) => {

    if(err) {
      throw new Error('No Module Found')
    }
    else {
        res.send(doc)
    }
})

};

exports.moduleCreate = (req, res, next) => {
    let NewModule = new Modules(req.body)

    NewModule.save((err, doc) => {
        if (!doc) {
            next("Cannot create Module")
        }

        else {
            res.send(doc)
        }
    })

};

exports.moduleUpdate = (req, res) => {

    res.send(Hotel_Data.hotel);
};

exports.moduleDelete = (req, res) => {

    res.send(resources.filters);
}; 