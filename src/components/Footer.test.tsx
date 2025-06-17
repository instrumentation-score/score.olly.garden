import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />)
    expect(screen.getByText('Instrumentation Score')).toBeInTheDocument()
  })

  it('displays the Instrumentation Score branding', () => {
    render(<Footer />)
    expect(screen.getByText('Instrumentation Score')).toBeInTheDocument()
    // Check if the Activity icon is present by looking at the role
    expect(document.querySelector('.lucide-activity')).toBeInTheDocument()
  })

  it('shows community and branding information', () => {
    render(<Footer />)
    expect(screen.getByText('Open Source')).toBeInTheDocument()
    expect(screen.getByText('Community Driven')).toBeInTheDocument()
  })

  it('includes the community message', () => {
    render(<Footer />)
    expect(screen.getByText(/Built with ❤️ by the Instrumentation Score community/)).toBeInTheDocument()
    expect(screen.getByText(/better instrumentation quality assessment/)).toBeInTheDocument()
  })

  it('has proper semantic structure with footer element', () => {
    render(<Footer />)
    expect(document.querySelector('footer')).toBeInTheDocument()
  })
}) 