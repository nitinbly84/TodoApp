import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
    const [todo, setTodo] = useState({name:"", done:false})
    const [todos, setTodos] = useState([])
    const completedTodos = todos.filter((todo) => todo.done).length;
    return (
        <div>
            <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos } />
            <TodoList todos={todos} setTodos={setTodos} />
            <Footer completedTodos={completedTodos} />
        </div>
    )
}