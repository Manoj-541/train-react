import React from 'react'

const FBCPropEx = (props) => {
    console.log(props);
    if(props.isReading == true){

   
  return (
    <div className='prop'>FBCPropEx
        <h1>{props.username} is a reading a book</h1>
        {
            props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
    </div>
  )
} else{
    return (<h1>is no Readind</h1>
)}
}

export default FBCPropEx