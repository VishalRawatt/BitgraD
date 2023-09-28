const mongoose = require('mongoose')
const db = 'mongodb+srv://Vishal:vishal@vishalrawat.m0jxh57.mongodb.net/Questify';

module.exports.connect = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Database Connected Successfully')
    }).catch((err) => { console.log(err) })
}