const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
