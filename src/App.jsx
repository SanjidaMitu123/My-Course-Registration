/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allcourses from './components/content/Allcourses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='title'>Course Registration</h1>
      <Allcourses> </Allcourses>
      
    </>
  )
}

export default App
