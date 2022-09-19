import React from 'react'
import Api from './components/conexao/Api'
import Header from './components/Header/Header'
import Toolbar from './components/Toolbar/Toolbar'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Api/>
      <Toolbar/>
    </div>
  )
}

export default App