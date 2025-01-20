import MyList from './MyList'

const MyContainer = () => {
    const items = [
        { id: '1', text: 'Item' },
        { id: '2', text: 'Item' },
        { id: '3', text: 'Item' },
    ];

    return (
        <div className="container">
            <h2>My Container</h2>
            <MyList header="My List" items={items} />
        </div>
    )
}

export default MyContainer