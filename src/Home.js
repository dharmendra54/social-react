import React, { useContext } from 'react'
import { UserContext } from './App1'

export default function Home() {
  const {flag,setFlag, user}=useContext(UserContext);
  return (
   <>           
    <div>Hi {user.name}</div>
    <button  onClick={() => setFlag(() => 0)} >Logout</button>
    
   </>
  )
}
