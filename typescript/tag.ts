class Tag {
    name: string;
    task: Task[];

    constructor(name: string, task: Task[]) {
        this.name = name;
        this.task = task;
    }

    //Aleter o nome da categoria
    UpdateName(nameTag: string){
        this.name = nameTag;
    }

}