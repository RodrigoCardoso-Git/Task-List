class Category {
    name: string;
    task: Task[];

    constructor(name: string, task: Task[]) {
        this.name = name;
        this.task = task;
    }

    // Alterar o nome da categoria
    updateName(nameCategory: string){
        this.name = this.name;
    }
}