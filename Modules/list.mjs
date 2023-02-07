class List {

    constructor(list) {
        this.list = list;
    }

    addTask(task) {
        return this.list.push(task);
    }
    
}

export default List;