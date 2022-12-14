const Mongoose = require('mongoose');
 
const ProjectSchema = new Mongoose.Schema({
    name: String,
    // user_id: {
    //     type: Mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }


}, { timestamps: true, versionKey: false });



module.exports = Mongoose.model('Project', ProjectSchema);