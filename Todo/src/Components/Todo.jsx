import { Button, Container, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, DeleteTodo } from "../Feature/TodoSlice";

function TodoApp() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleDelete = (index) => {
    dispatch(DeleteTodo(index));
  };

  return (
    <Container
      className="mt-5 p-4 rounded shadow bg-white"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="text-center mb-4">📝 TODO APP</h2>

      <div className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </div>

      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{todo.title}</span>
            <Button
              onClick={() => handleDelete(index)}
              variant="danger"
              size="sm"
            >
              ✕
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoApp;
