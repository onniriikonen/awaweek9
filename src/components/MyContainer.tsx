import MyList from './MyList'
import { useState } from 'react'

type TItem = {
    id: string;
    text: string;
};


const MyContainer = () => {
    const [items, setItems] = useState<TItem[]>([
        { id: '1', text: 'Item' },
        { id: '2', text: 'Item' },
        { id: '3', text: 'Item' },
    ])

    const [newText, setNewText] = useState('')


    const addItem = () => {
        if (newText.trim()) {
            const newItem: TItem = {
                id: Date.now().toString(),
                text: newText.trim(),
            }
            setItems([...items, newItem])
            setNewText('')
        }
    }


    return (
        <div className="container">
            <h2>My Container</h2>
            <textarea
                value={newText}
                onChange={(event) => setNewText(event.target.value)}
                placeholder="Enter text"
            />
            <button onClick={addItem}>Add Item</button>

            <MyList header="My List" items={items} />
        </div>
    )
}

export default MyContainer