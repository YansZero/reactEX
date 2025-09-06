export interface ToDoItem {
    content: string,
    start_time: Date| null,
    end_time: Date | null,
    key: string,
    isEditing: boolean,
    isFinished: boolean
}