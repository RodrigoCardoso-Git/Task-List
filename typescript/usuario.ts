class User {
    name: string;
    email: string;
    password: string;
    tasks: Task[];

    constructor(name:string, email:string, password:string, tasks: Task[]) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.tasks = tasks;
    }


    //Adicionar tarefas
    addTask(Task: Task) {
        this.tasks.push(Task);
    }

    // Editar tarefas do usuario
    editTask(task: Task, modifield: string): boolean | undefined {
        let modify: string = modifield;
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i] === task){
                if(this.tasks[i].title == modifield) {
                    this.tasks[i].changeTitle(task.title);
                    return true;
                } else if (this. tasks[i].description == modifield){
                    this.tasks[i].changeDescription(task.description);
                    return true;
                } else {
                    return undefined;
                }
            }
        }
    }

    findTaskPosition(title: string ){
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].title == title) {
                return i;
            }
        }
        return undefined;
    }
 
    //Excluir tarefa do usuário
    deleteTask(task: Task): boolean {
        let posicao: number | undefined;
        posicao = this.findTaskPosition(task.title);
        if(posicao != undefined) {
            this.tasks.splice(posicao, 1);
            return true;
        }
        return false;
    }

    //Pesquisar tarefas pelo o nome
    searchTaskName(task: Task, taskTitle: string): boolean | undefined {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].title == taskTitle) {
                this.listTasks(task);
                return true;
            }
        }
        return undefined;
    }

    //Lista tarefas do usuário
    listTasks(task: Task) {
        console.log(`Title: ${task.title} \n Description: ${task.description} \n Priority: ${task.priority} \n Status:  ${task.status} \n Category: ${task.category} \n Tag: ${task.tag} \n`);
    }

    //Filtrar as tarefas do usuario por status - concluídas ou pendentes
    filterTasksStatus(task: Task, statusTask: boolean) {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].status == statusTask) {
                this.listTasks(task);
            }
        }
    } 

}