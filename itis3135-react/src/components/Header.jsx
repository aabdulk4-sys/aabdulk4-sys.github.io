import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Ayah Abdulkareem | Ambitious Antelope</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/introduction">Introduction</Link> |{' '}
        <Link to="/contract">Contract</Link>
      </nav>
    </header>
  )
}
