import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

const UserProfile = ({match}) => {
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
        <div>
        {userslist.filter(user=>user.id==match.params.id).map(user=><UserCard user={user}/>)}
        </div>
    )
}

export default UserProfile
