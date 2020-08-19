var mongoose = require('mongoose');

var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost/Remote_Roofing');
 
autoIncrement.initialize(connection);

var FileClaimSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
  }
}, {
    versionKey: false 
});

FileClaimSchema.plugin(autoIncrement.plugin, 'fileclaim');
var fileclaim = mongoose.model('fileclaim', FileClaimSchema);


module.exports = fileclaim;