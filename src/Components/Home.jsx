import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import { nanoid } from 'nanoid'


function Home() {


    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
    const uniqueId = nanoid();

    const onAddNewTodo = (title, description) => {
        if (title && description) {
            const newTodo = {
                id: uniqueId,
                title: title,
                description: description,
                completed: false
            }
            setTodos(prevTodo => [...prevTodo, newTodo])
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

    const markCompleted = (id) => {
        const markDone = todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        )
        setTodos(markDone)
    }

    const editTodo = (id) => {
        
    }

    return (
        <div style={{ backgroundColor: 'indianred', borderRadius: '12px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
            <h2 style={{ color: 'beige', fontFamily: 'sans-serif' }}>Todo List</h2>
            <AddTodo addNewTodo={onAddNewTodo} />
            <ul style={{ backgroundColor: '#1B1C1B', borderRadius: '12px' }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ fontFamily: 'monospace', color: 'azure', marginRight: '10px' }}>{todo.title}</h2>
                        <p style={{ fontFamily: 'monospace', color: 'aquamarine', display: 'inline', margin: '0', textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.description}</p>
                        <button style={{ padding: '2px', marginLeft: '8px' }} onClick={() => markCompleted(todo.id)}>✔️</button>
                        <button style={{ padding: '2px', marginLeft: '8px' }} onClick={() => deleteTodo(todo.id)}>🗑️</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Home;