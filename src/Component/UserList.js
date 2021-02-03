import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
const UserList = () => {
    const [loading, setLoading] = useState(true)
    const [userslist, setUserslist] = useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.data)
      .then(users=>{setUserslist(users);setLoading(false)})
      .catch(Err=>setUserslist([]))
        }
    , [])
    if(loading===true){
        return <h1>loading...</h1>
    }
    return (
        <div className="row">
            {userslist.map(user=><UserCard user={user} key={user.id}/>)}
        </div>
    )
}

export default UserList
