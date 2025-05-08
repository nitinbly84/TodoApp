import "../cssSheets/TodoForm.css";
export default function TodoForm({ todo, setTodo, todos, setTodos }) {
    function handleSubmit(e) {
        e.preventDefault();
        var isPresent = false;
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].name === todo.name) {
                isPresent = true;
                window.alert("Item with this name already exists...");
                break;
            }
        }
        if (!isPresent)
            setTodos([...todos, todo])
        setTodo({ name: "", done: false })
    }
    return (
        
        <form className="todoform" onSubmit={handleSubmit}>
            <div className="formcontainer">
            <input className="inputstyle"
                    onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                value={todo.name}
                type="text" placeholder="Enter value..."></input>
                <button className="buttonstyle" type="submit">Add</button>
            </div>
        </form>
        
    )
}