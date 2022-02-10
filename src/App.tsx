import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PostScreen from './screens/postScreen/PostScreen'
import PostsScreen from './screens/postsScreen/PostsScreen'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <Routes>
        <Route path="/" element={<App />}>
          <Route path="posts" element={<PostsScreen />} />
          <Route path="post/:invoiceId" element={<PostScreen />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Theres nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
