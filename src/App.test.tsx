import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('renders the homepage by default', () => {
    render(<App />)
    // Check if main sections are present (these should be in the Hero component)
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
  })
}) 