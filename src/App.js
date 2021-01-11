import React from 'react';
import './App.css';
import TodoApp from './TodoApp';


export function Greeting() {
  return (
    <p>hello once</p>
  )

}

function App() {
  return (
    <>
    <TodoApp />
    </>
  );
}

export default App;
