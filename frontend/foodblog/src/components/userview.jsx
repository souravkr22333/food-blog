import React from 'react'
import Userprofile from './userview/userprofile'
import Userrecipe from './userview/userrecipe'
function userview() {
  return (
    <>
    <div className="container mt-3 justified">
       <Userprofile />
       <Userrecipe />
    </div>
     
    </>
  )
}

export default userview
