import React from 'react'
import { useSelector } from 'react-redux';
const Component4 = () => {
    const data = useSelector(store => store.comp);
    console.log(data);
  return (
    <div className='component-container' style={{display : "flex",flexDirection : "row",justifyContent : "center",gap: "2rem",alignItems : "center"}}>
        <h2>Component 4 </h2> <span>- grand child</span>
        <h4>{data}</h4>
    </div>
  )
}

export default Component4