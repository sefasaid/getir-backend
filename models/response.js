/**
 * Created by sefasaid on 03/03/2017.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
//setting up response schema
var Records   = new Schema({
    key: String,
    value: String,
    createdAt: String
});
//export schema to use
module.exports = mongoose.model('Records', Records);