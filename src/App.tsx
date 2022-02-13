import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PostScreen from './screens/postScreen/PostScreen'
import PostsScreen from './screens/postsScreen/PostsScreen'
import './App.css'
import { GlobalContext } from './context/GlobalProvider'

function App() {
  const { message } = useContext(GlobalContext)
  useEffect(() => {
    console.log(`${message} App`)
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsScreen />} />
        <Route path="/posts" element={<PostsScreen />} />
        <Route path="/post/:postId" element={<PostScreen />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
