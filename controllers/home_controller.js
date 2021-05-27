
const Tasks = require('../models/task');

module.exports.home = function(req,res){
    Tasks.find({},function(err,tasks){
        if(err){
            console.log("error in fetching data from database",err);
            return;
        }
        return res.render('home',{
            title:"TO DO app",
            tasks_list:tasks
        });

    });
    
};

module.exports.addTask = function(req,res){
    
    Tasks.create(
        {
            description:req.body.task_description,
            category:req.body.category,
            dueDate:req.body.date
        },
        function(err,new_task){
            if(err){
                console.log("error in inserting data",err);
                return;
            }
            console.log("new added task",new_task);
            res.redirect('/');
        }
    );
}