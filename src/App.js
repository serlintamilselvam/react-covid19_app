import React from 'react'
import './App.css'

// Custom Components
import Stats from './components/Stats/StatsContainer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
        <Header />
        <Stats />
    </div>
  );
}

export default App