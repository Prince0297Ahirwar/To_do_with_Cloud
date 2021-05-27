const mongoose = require('mongoose');

//creating schema

const taskSchema = new mongoose.schema(
    {
        description:{
            type:String,
            required:true
        },

        category:{
            type:String,
            required:true
        },
        dueDate:{
            type:date
        }
    }
);

//creating model mongoose.model(modelName, schema):
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;