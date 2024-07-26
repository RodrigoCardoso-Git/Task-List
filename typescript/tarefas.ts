class Task {
    title: string;
    description : string;
    priority: string;
    status: boolean;
    category: Category | null;
    tag: Tag | null;

    constructor(title: string, description: string, priority: string, category: Category, tag: Tag) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = false;
        this.category = category;
        this.tag = tag;
    }

    //Atualizar o status
    updateStatus(newStatus: boolean): void{
        this.status = newStatus;
    }

    //Atualiza a prioridade
    updatePriority(newPriority: string): void {
        this.priority = newPriority;
    }

    // Adiciona uma tag à tarefa.
    addTag(newTag: Tag): void{
        this.tag = newTag;

    }

    //Remove uma tag da tarefa pelo nome
    removeTag(tagName: Tag): void {
        this.tag = null;
    }

    //Adiciona uma categoria
    addCategory(newCategory: Category): void {
        this.category = newCategory;
    }

    //Remove a categoria da tarefa pelo nome
    removeCategory(categoryName: Category): void {
        this.category = null;
    }

    //Alterar o título da tarefas
    changeTitle(title: string): void {
        this.title = title;
    }

    //Alterar o descrição da tarefas
    changeDescription(description: string): void {
        this.description = description;

    }
}