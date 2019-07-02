import React from 'react'
import './App.css'
import Main from './components/Main'
import TopNav from './components/Nav'

const App: React.FC = () => {
  return (
    <div className="App">
      <TopNav />
      <Main />
    </div>
  )
}

export default App
