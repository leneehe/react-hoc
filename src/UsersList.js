import React, { useEffect, useState } from 'react'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        const fetchUsers = async() => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const json = await res.json()
            setUsers(json)
            console.log(json)
        }
        fetchUsers();
    }, []);

    let renderUsers = users.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })

    let filterUsers = users.filter(({name}) => {
        return name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    }).map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })
  return (
    <div>
        <h2>Users</h2>
        <input type='text' value={term} placeholder='Search name' onChange={(e) => setTerm(e.target.value)} />
      {filterUsers}

    </div>
  )
}

export default UsersList
