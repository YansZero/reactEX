import { timeFormat } from "d3-time-format";
import { useState } from "react";
import type { ToDoItem } from "../type/TodoItem";

// 定義 props 的類型
interface TodoEditFormProps {
  todoItem: ToDoItem;
  editToDo: (key: string, newContent: string) => void;
}

function TodoEditForm({ todoItem, editToDo }: TodoEditFormProps) {
  const placeHolder = "輸入代辦事項";
  const addBtnContent = "完成";
  const [content, setContent] = useState(todoItem.content);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editToDo(todoItem.key, content);
  };

  return (
    <form className="todo-create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeHolder}
        // two way binding
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">{addBtnContent}</button>
    </form>
  );
}

function formatTime(date: Date): string {
  const specifier = "%Y-%m-%d %H:%M:%S";
  const formatter = timeFormat(specifier);
  return formatter(date);
}

export default TodoEditForm;
