import React from 'react'
import { useEffect,useState } from 'react'

const UseEffectEx = () => {
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         setTimeout(() =>{
//         setCount(1000);
//     },5000);
//     document.title = count;
// },[])
//! api fetching
const [users, setUsers] = useState([]);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json().then(data =>{
        setUsers(data);
        console.log(data);
    }))
    .catch(err=>console.log(err))
},[])

  return (
    <div className='parent'>
    {/* <h2>{count}</h2> */}
    {
        users.map((user, index) => {
            return (
                <React.Fragment key = {index}>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                </React.Fragment>
            )
    })
}
    </div>
  )
}

export default UseEffectEx