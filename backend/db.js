const mongoose = require('mongoose')
require('dotenv').config();
const db = process.env.DATABASE_NAME ;

module.exports.connect = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database Connected Successfully')
    }).catch((err) => { console.log(err) })
}