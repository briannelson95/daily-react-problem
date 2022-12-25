import React, { useState } from 'react'
import styles from '../../styles/ToDo.module.css'

type Item = {
    name: string;
    complete: boolean;
}

export default function ToDo() {
    const [todo, setTodo] = useState<Item[]>([]);
    const [inputValue, setInputValue] =  useState('')
    const [complete, setComplete] = useState<Item[]>([]);

    const handleSubmit = () => {
        setTodo([...todo, { name: inputValue, complete: false }])
        setInputValue('')
    }

    const handleComplete = (index: number) => {
        const newItems = [...todo];
        const completedItem = newItems[index]

        newItems.splice(index, 1)
        setTodo(newItems)
        setComplete([...complete, completedItem])
    }

    return (
        <main className={styles.container}>
            <h1>To Do List</h1>
            <div className={styles.form}>
                <label htmlFor='item'>To Do Item</label>
                <br />
                <input 
                    value={inputValue} 
                    type='text' 
                    name='item' 
                    id='item'
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                          handleSubmit();
                    }}}
                />
                <br />
                <button onClick={handleSubmit}>Add Item</button> 
            </div>
            <div className={styles.grid}>
                <div>
                    <h2>Things to do</h2>
                    <div>
                        {todo.map((item, index) => (
                            <div key={index}>
                                <input
                                    type='checkbox'
                                    checked={item.complete}
                                    onChange={() => handleComplete(index)}
                                />
                                {` ${item.name}`}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{display: 'inline-block'}}>
                        <h2>Completed</h2>
                        {complete.length ? <button onClick={() => setComplete([])}>Clear List</button> : ''}
                        
                    </div>
                    <ul>
                        {complete.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}
