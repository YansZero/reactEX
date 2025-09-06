import { timeFormat } from "d3-time-format";
import { useState } from "react";

// 定義 props 的類型
interface TodoCreateFormProps {
  addToDo: (taskContent: string) => void;
}

function TodoCreateForm({ addToDo }: TodoCreateFormProps) {
  const placeHolder = "輸入代辦事項";
  const addBtnContent = "加入";
  const [content, setContent] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToDo(content);
    setContent("");
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

export default TodoCreateForm;
