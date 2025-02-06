import React from 'react'

const FBCStateEX = () => {
  const [value , setValue] = React.useState(0)
  console.log(value);
  const changeNumber =()=>{
    setValue(1000);
  }
  return (
    <div>FBCStateEX
    <h2>{value}</h2>
    <button onClick={changeNumber}>changeNumber</button>
    </div>
  )
}

export default FBCStateEX