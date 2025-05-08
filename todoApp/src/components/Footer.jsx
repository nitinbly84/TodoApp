import "../cssSheets/Footer.css"
export default function Footer({ completedTodos }) {
    return (
        <div className="footer">
            <span className="item">
                Completed Todos : {completedTodos}
            </span> 
        </div>
    )
}