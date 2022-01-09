const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect("mongodb+srv://mohan123:mohan123@cluster0.xwyjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
}
