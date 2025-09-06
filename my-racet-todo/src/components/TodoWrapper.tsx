import { timeFormat } from "d3-time-format";
import { useState } from "react";
import type { ToDoItem } from "../type/TodoItem";
import TodoCreateForm from "./TodoCreateForm";
import TodoItem from "./TodoItem";

function TodoWrapper() {
  const h1Content = "我的代辦事項";
  const [todoList, setTodoList] = useState<ToDoItem[]>([
    {
      content: "刷地板",
      start_time: new Date(),
      end_time: null,
      key: crypto.randomUUID(),
      isEditing: false,
      isFinished: false,
    },
    {
      content: "掃地",
      start_time: new Date(),
      end_time: null,
      key: crypto.randomUUID(),
      isEditing: false,
      isFinished: false,
    },
    {
      content: "洗碗",
      start_time: new Date(),
      end_time: null,
      key: crypto.randomUUID(),
      isEditing: false,
      isFinished: false,
    },
  ]);

  function addToDo(taskContent: string) {
    if (!taskContent.trim()) return; // 避免新增空白事項
    const newTodo: ToDoItem = {
      content: taskContent,
      start_time: new Date(),
      end_time: null,
      key: crypto.randomUUID(), // 為新項目產生唯一的 key
      isEditing: false,
      isFinished: false,
    };

    // 使用 callback 形式更新 state，這是最佳實踐
    setTodoList([...todoList, newTodo]);
    //setTodoList(prevList => [...prevList, newTodo]);
  }

  function editToDo(id: string, newContent: string) {
    if (!newContent.trim()) return; // 避免新增空白事項

    // 使用 callback 形式更新 state，這是最佳實踐
    setTodoList(
      todoList.map((todo) => {
        return todo.key === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  }

  function deleteToDo(id: string) {
    setTodoList(todoList.filter((todo) => todo.key !== id));
  }

  function toggleIsFinished(id: string) {
    setTodoList(
      todoList.map((todoItem) => {
        return todoItem.key === id
          ? { ...todoItem, isFinished: !todoItem.isFinished }
          : todoItem;
      })
    );
  }

  function toggleIsEditting(id: string) {
    setTodoList(
      todoList.map((todoItem) => {
        return todoItem.key === id
          ? { ...todoItem, isEditing: !todoItem.isEditing }
          : todoItem;
      })
    );
  }

  return (
    <div className="todo-wrapper">
      <h1>{h1Content}</h1>
      <TodoCreateForm addToDo={addToDo} />
      {todoList.map((todoItem) => {
        // 因為 todoList 已經被賦予 ToDoItem[] 類型，
        // 所以這裡的 todoItem 會被 TypeScript 自動推斷為 ToDoItem 類型
        return (
          <TodoItem
            todoItem={todoItem}
            deleteToDo={deleteToDo}
            toggleIsFinished={toggleIsFinished}
            toggleIsEditting={toggleIsEditting}
            editToDo={editToDo}
            key={todoItem.key}
          />
        );
      })}
    </div>
  );
}

function formatTime(date: Date): string {
  const specifier = "%Y-%m-%d %H:%M:%S";
  const formatter = timeFormat(specifier);
  return formatter(date);
}

export default TodoWrapper;
