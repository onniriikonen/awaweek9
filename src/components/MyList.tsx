import React from 'react'

type TItem = {
    id: string
    text: string
    clicked: boolean
}

interface ListProps {
    header: string
    items: TItem[]
    updateList: (id: string) => void
}

const MyList: React.FC<ListProps> = ({ header, items, updateList }) => {
    return (
        <div>
            <h3>{header}</h3>
            <ol>
                {items.map((item) => (
                    <li
                    key={item.id}
                    style={{
                        textDecoration: item.clicked ? 'line-through' : 'none',
                        cursor: 'pointer',
                    }}
                    onClick={() => updateList(item.id)}
                >
                    {item.text}
                </li>
                ))}
            </ol>
        </div>
    )
}

export default MyList