import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
const LOCAL_STORAGE_KEY = "todoApp.todos";
function TodoData() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  function hundleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, comlete: false }];
    });
    todoNameRef.current.value = null;
  }
  function hundleClearTodo() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div>
      <dl class="m-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-4 sm:p-6">
            <dt class="text-sm mb-4 font-medium  text-gray-500 truncate">
              Pendding tasks
            </dt>
            <div class="flex items-center">
              <div class="ml-5 w-0 flex-1">
                <dd class="flex items-baseline">
                  <div class="text-2xl font-semibold text-gray-900">
                    {todos.filter((todo) => !todo.complete).length}
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-4 sm:p-6">
            <dt class="text-sm mb-4 font-medium  text-gray-500 truncate">
              Complete tasks
            </dt>
            <div class="flex items-center">
              <div class="ml-5 w-0 flex-1">
                <dd class="flex items-baseline">
                  <div class="text-2xl font-semibold text-gray-900">
                    {todos.filter((todo) => todo.complete).length}{" "}
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </dl>
      <div class="px-4 py-4 sm:p-6">
        <input className="mr-2" ref={todoNameRef} type="text" />
        <button className="button" onClick={hundleAddTodo}>
          {" "}
          Add Todo List
        </button>
        <button className="button" onClick={hundleClearTodo}>
          Clean Completed Todo List
        </button>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default TodoData;
