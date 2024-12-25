import React from 'react'
import UserList from '../components/UserList';


const Users = () => {

    const USERS = [{
        id: 'u1',

    }]
    return (
        <div><UserList items={USERS} /></div>
    )
}

export default Users;