import { useState } from "react";
import "./ToDo.css";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const addTodo = () => {
        if (!value.trim()) return;

        setTodos([
            ...todos,
            { id: Date.now(), text: value, completed: false },
        ]);
        setValue("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (

        <div className="section" id="todoApp">
            <div className="todo">
                <div className="todo-input">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter a task"
                    />
                    <button onClick={addTodo}>Enter</button>
                </div>

                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                />
                                <span
                                    style={{
                                        textDecoration: todo.completed
                                            ? "line-through"
                                            : "none",
                                    }}
                                >
                                    {todo.text}
                                </span>
                            </label>
                            <button onClick={() => deleteTodo(todo.id)}>✕</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;