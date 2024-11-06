import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Articles from './Components/Articles'
import ArticlePage from './Components/ArticlePage'

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App


