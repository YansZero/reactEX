import type { ToDoItem } from "../type/TodoItem";
import { MdDelete, MdEdit } from "react-icons/md";
import TodoEditForm from "./TodoEditForm";

// 定義 props 的類型
interface TodoItemProps {
  todoItem: ToDoItem;
  deleteToDo: (id: string) => void;
  toggleIsFinished: (id: string) => void;
  toggleIsEditting: (id: string) => void;
  editToDo: (id: string, content: string) => void;
}

function TodoItem({
  todoItem,
  deleteToDo,
  toggleIsFinished,
  toggleIsEditting,
  editToDo,
}: TodoItemProps) {
  return todoItem.isEditing ? (
    <TodoEditForm todoItem={todoItem} editToDo={editToDo} />
  ) : (
    <div className={`todo-item ${todoItem.isFinished ? "isCompleted" : ""}`}>
      <p
        onClick={() => {
          toggleIsFinished(todoItem.key);
        }}
      >
        {todoItem.content}{" "}
      </p>
      <div className="button-area">
        <MdEdit
          className="todo-item-button"
          onClick={() => {
            toggleIsEditting(todoItem.key);
          }}
        />
        <MdDelete
          className="todo-item-button"
          onClick={() => {
            deleteToDo(todoItem.key);
          }}
        />
      </div>
    </div>
  );
}

export default TodoItem;
