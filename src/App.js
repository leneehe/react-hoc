import './App.css';
import TodoList from './TodoList';
import UsersList from './UsersList';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Component</h2>
      <div className='section'>
        <UsersList />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
