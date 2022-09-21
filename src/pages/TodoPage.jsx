import React, { useState } from "react";
const TodoPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Dedicarle 1 hora al dia a aprender Javascript",
      completed: false
    },
    {
      id: 2,
      description: "Tomar notas de lo que aprendo diario",
      completed: false
    }
  ]);

  const markAskCompleted = (id) => {
    console.log(id);
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        //return { description: todo.description, id: todo.id, completed: true };
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newList);
  };
  const renderTodo = (todo) => (
    <li className="list-group-item" onClick={() => markAskCompleted(todo.id)}>
      <span className={`${todo.completed ? "text-muted" : ""}`}>
        {todo.description}
      </span>
    </li>
  );

  const todoDescriptions = todos.map(renderTodo);

  return (
    <div>
      <h1> TodoPage </h1>
      <ul className="list-group">{todoDescriptions}</ul>
    </div>
  );
};

/*
{
  todos.map ((todo)=> {

  })

  todos.map(function(todo){
    console.log(todo)
    todo.id
  })
}
*/

export default TodoPage;
