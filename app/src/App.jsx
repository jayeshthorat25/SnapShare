import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import ImageFeed from './components/ImageFeed'
import LoginSignup from './components/Login'

function App() {
  

  return (
    <>
      <Landing />
      <ImageFeed/>
      <LoginSignup />
    </>
  )
}

export default App
