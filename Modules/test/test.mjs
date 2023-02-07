import Task from "../task.mjs";
import List from "../list.mjs";

const testTasks = ["work", "study", "go grocery shopping"];

function listTasks(){
    const taskList = new List(testTasks);
    console.log(taskList)
    test(taskList != undefined);
}

function test(test){
    if(test){
        console.log("🟢 List includes tasks");
    } else{
        console.log("🔴 ");
       
    }
}

listTasks();
