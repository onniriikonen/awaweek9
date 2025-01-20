import MyList from './MyList'
import { useState } from 'react'

type TItem = {
    id: string
    text: string
    clicked: boolean
}


const MyContainer = () => {
    const [items, setItems] = useState<TItem[]>([
        { id: '1', text: 'Item', clicked: false },
        { id: '2', text: 'Item', clicked: false },
        { id: '3', text: 'Item', clicked: false },
    ])

    const [newText, setNewText] = useState('')


    const addItem = () => {
        if (newText.trim()) {
            const newItem: TItem = {
                id: Date.now().toString(),
                text: newText.trim(),
                clicked: false,
            }
            setItems([...items, newItem])
            setNewText('')
        }
    }

    const updateList = (id: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, clicked: !item.clicked } : item
            )
        )
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

            <MyList header="My List" items={items} updateList={updateList} />
        </div>
    )
}

export default MyContainer