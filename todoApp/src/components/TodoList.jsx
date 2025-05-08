import TodoItem from "./TodoItem";
import "../cssSheets/TodoList.css";
export default function TodoList({ todos, setTodos }) {
    const sorted = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
    return (
        <div className="todolist">
            {sorted.map((item) => <TodoItem key={item.name} item={item}
                todos={todos} setTodos={setTodos} />)}
    </div>
    )
}