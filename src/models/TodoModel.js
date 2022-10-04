const mongoose = require('mongoose');

const schema = mongoose.Schema({
        userName: {
            type: String,
            required: true
        },
        todoSubject: {
            type: String,
            unique: true,
            required: true
        },
        todoDescription: {
            type: String
        },
        todoStatus: {
            type: String,
            enum: ['new', 'processing', 'finished'],
            default: 'new'
        }
    },
    {
        timestamps: true
    },
    {
        versionKey: false
    }
)

const TodoModel = mongoose.model("Todo", schema)

module.exports = TodoModel;