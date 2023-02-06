import Task from "../task.mjs";
import List from "../list.mjs";

const testTasks = ["work", "study", "go grocery shopping"];

function listTasks(){
    const taskList = new list(testTasks);
    test(taskList.addTask() === testTasks);
}

function test(test, description){
    if(test){
        console.log("🟢 " );
    } else{
        console.log("🔴 " );
    }
}
