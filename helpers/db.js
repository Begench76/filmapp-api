const mongoose = require('mongoose');
module.exports = () => {
mongoose.connect('mongodb+srv://begench:HY3uOgMroNzfkcCS@cluster0.q9c4v.mongodb.net/filmapp-api', {useNewUrlParser: true,
 useUnifiedTopology: true
});


mongoose.connection.on("open", ()=>{console.log('Successfully connected to MongoDB')})
mongoose.connection.on('error', ()=>{console.log('MongoDB connection was failed...')})
}