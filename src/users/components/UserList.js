import React from 'react'
import './UserList.css'
import UserItem from './UserItem'

const UserList = props => {
    if (props.items.length === 0) {
        return (
            <div className='center'>
                <h2>No Use found</h2>
            </div>
        )
    } else {

        return (
            <div>
                <ul>
                    {props.items.map(user => {
                        return <UserItem
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            placeCount={user.places} />
                    })}
                </ul>
            </div>
        )
    }
}



export default UserList