import React from 'react'
import HOC from './HOC'

const TodoList = ({data}) => {
    let renderTodos = data.map((todo) => {
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
      {renderTodos}
    </div>
  )
}

const SearchTodos = HOC(TodoList, "todos")

export default SearchTodos
