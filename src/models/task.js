const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({

    description: {

        type: String,
        required: true,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false
    },

    owner: {

        type: mongoose.Schema.Types.ObjectId,
        requied: true,
        ref: 'User'

    }

}, {

    timestamps: true
});

taskSchema.pre('save', async function(next) {

    const task = this;

    console.log('task just before saving');


    next();

})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;