import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Index from './Index'

describe('Index Page', () => {
  it('renders without crashing', () => {
    render(<Index />)
    // Check for the main container
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<Index />)
    
    // Check if main content areas are present
    // Hero section
    expect(screen.getByText('Instrumentation')).toBeInTheDocument()
    expect(screen.getByText('Score')).toBeInTheDocument()
    
    // Footer section
    expect(screen.getByText('© 2025 OllyGarden, Inc')).toBeInTheDocument()
  })

  it('has the correct background styling', () => {
    render(<Index />)
    const mainContainer = document.querySelector('.min-h-screen')
    expect(mainContainer).toHaveClass('bg-slate-900')
  })

  it('includes community-related content', () => {
    render(<Index />)
    expect(screen.getByText(/Instrumentation Score community/)).toBeInTheDocument()
  })
}) 