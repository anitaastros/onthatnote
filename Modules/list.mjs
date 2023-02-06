class List {

    constructor(list) {
        this.list = [];
    }

    function addTask(task) {
        return this.list.push(task) - 1;
    },
    
}

export default List;