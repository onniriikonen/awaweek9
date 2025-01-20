import React from 'react'

type TItem = {
    id: string
    text: string
}

interface ListProps {
    header: string
    items: TItem[]
}

const MyList: React.FC<ListProps> = ({ header, items }) => {
    return (
        <div>
            <h3>{header}</h3>
            <ol>
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default MyList