import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostScreen from './screens/postScreen/PostScreen'
import PostsScreen from './screens/postsScreen/PostsScreen'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

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
