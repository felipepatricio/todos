import React from 'react'
import { StateProvider } from '../store'

const Home = () => (
  <StateProvider>
    <App />
  </StateProvider>
)

export default Home
