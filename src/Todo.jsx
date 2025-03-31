import { useState } from "react"; // React Hooks
import "./index.css"; // Import css 

const Todo = () => {
  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState("");

  const handleInputChange = (e) => {
    setnewtask(e.target.value);
  };

  const addTask = () => {
    if (newtask.trim() !== "") {
      settask((t) => [...t, newtask]);
      setnewtask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTask = task.filter((_, i) => i !== index);
    settask(updatedTask);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      settask(updatedTask);
    }
  };

  const moveTaskDown = (index) => {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      settask(updatedTask);
    }
  };

  return (
    <section className="to-do">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              👆🏻
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇🏻
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Todo;
