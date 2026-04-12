import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Checkout from './Checkout'
import Trainers from './Trainers'
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <nav className="flex items-center justify-center gap-6 p-6 bg-gray-100">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/checkout"
          className={({ isActive }) => isActive ? "active-link" : ""}>
          Go to Checkout
        </NavLink>

        <NavLink
          to="/trainers"
          className={({ isActive }) => isActive ? "active-link" : ""}>
          Meet our Trainers
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <main className="px-6 py-10 space-y-10">
              <h1 className="text-4xl font-bold text-center">
                Welcome to Fitness Monger
              </h1>

              <section className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold">About Us</h2>
                <p className="text-muted-foreground mt-2">
                  Fitness Monger helps people build strength, improve endurance,
                  and stay consistent with their fitness goals.
                </p>
              </section>
            </main>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </HashRouter>
  )
}

export default App
