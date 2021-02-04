const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost/adv', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = mongoose