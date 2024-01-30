import React, { useState } from 'react'

function AddTodo(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleOnClick = () => {
        props.addNewTodo(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <div>
            <input
                style={{ padding: '14px', borderRadius: '10px', border: 'none', fontFamily: 'monospace' }}
                type="text"
                onChange={handleTitleChange}
                value={title}
                placeholder='add title'
            />
            <input
                style={{ marginLeft: "5px", padding: '14px', borderRadius: '10px', border: 'none', fontFamily: 'monospace' }}
                type="text"
                onChange={handleDescriptionChange}
                value={description}
                placeholder='add description'
            />
            <button

                onClick={handleOnClick}
                type='submit' style={{ marginLeft: '8px', padding: '14px', backgroundColor: 'cornflowerblue', color: 'beige', fontFamily: 'monospace',borderRadius: '10px'}}>Add Todo</button>
        </div>
    )
}

export default AddTodo;