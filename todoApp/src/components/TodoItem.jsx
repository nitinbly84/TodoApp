import "../cssSheets/TodoItem.css";
export default function TodoItem({ item, todos, setTodos }) {
	function handleDelete(item) {
		setTodos(todos.filter((todo) => todo.name !== item.name ))
	}
	function handleClick(name) {
		setTodos(todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo));
	}
	return (
	<div className="TodoItem">
			< div className="Item">
				<span className={ item.done ? "completed" : ""}
					onClick={() => handleClick(item.name)}>
					{item.name}
				</span>
				<span>
					<button className="deletebutton" onClick={() => handleDelete(item) }>X</button>
				</span>
		</div >
			<hr className="Line" />	
	</div>
	)
}