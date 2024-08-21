import React from 'react'
import list from "../../public/list.json"
function Freebook() {
    const filterdata=list.filter((data)=>data.category==="free");
    console.log(filterdata);
    
  return (
    <>
    <div>
        <h1 className='font-semibold text-xl pb-2'> Free offered courses</h1>

      
    </div>
    </>
  )
}

export default Freebook
