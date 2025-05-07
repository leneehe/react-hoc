import React, { useState, useEffect } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        const fetchTodos = async() => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const json = await res.json()
            setTodos(json)
        }
        fetchTodos();
    }, [])


    let filterTodos = todos.slice(0, 10).filter(({title}) => {
        return title.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    }).map((todo) => {
        return (
            <div key={todo.id}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        )
    })
  return (
    <div>
        <h2>Todos</h2>
        <input type='text' value={term} placeholder='Search name' onChange={(e) => setTerm(e.target.value)} />
      {filterTodos}

    </div>
  )
}

export default TodoList
