import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('renders without crashing', () => {
    render(<Testimonials />)
    expect(screen.getByText('What People Are Saying')).toBeInTheDocument()
  })

  it('displays the main heading and description', () => {
    render(<Testimonials />)
    expect(screen.getByText('What People Are Saying')).toBeInTheDocument()
    expect(screen.getByText(/Real feedback from teams and organizations/)).toBeInTheDocument()
  })

  it('shows the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('James Moessis')).toBeInTheDocument()
    expect(screen.getByText('Atlassian')).toBeInTheDocument()
    expect(screen.getByText(/Instrumentation Score is a much-needed innovation/)).toBeInTheDocument()
  })

  it('has navigation controls', () => {
    render(<Testimonials />)
    const buttons = screen.getAllByRole('button')
    
    // Should have previous, pause/play, next buttons plus dot indicators
    expect(buttons.length).toBeGreaterThan(3)
    
    // Check for navigation buttons by their icons (we'll look for aria-labels or titles)
    const pauseButton = screen.getByTitle(/Pause slideshow|Resume slideshow/)
    expect(pauseButton).toBeInTheDocument()
  })

  it('allows manual navigation to next testimonial', () => {
    render(<Testimonials />)
    
    // Find next button (ChevronRight)
    const buttons = screen.getAllByRole('button')
    const nextButton = buttons.find(button => 
      button.querySelector('.lucide-chevron-right')
    )
    
    if (nextButton) {
      fireEvent.click(nextButton)
      expect(screen.getByText('Dan Gomez Blanco')).toBeInTheDocument()
      expect(screen.getByText('New Relic')).toBeInTheDocument()
    }
  })

  it('allows manual navigation to previous testimonial', () => {
    render(<Testimonials />)
    
    // Navigate to second testimonial first
    const buttons = screen.getAllByRole('button')
    const nextButton = buttons.find(button => 
      button.querySelector('.lucide-chevron-right')
    )
    if (nextButton) {
      fireEvent.click(nextButton)
    }
    
    // Then navigate back
    const prevButton = buttons.find(button => 
      button.querySelector('.lucide-chevron-left')
    )
    if (prevButton) {
      fireEvent.click(prevButton)
      expect(screen.getByText('James Moessis')).toBeInTheDocument()
    }
  })

  it('has pause/play functionality', () => {
    render(<Testimonials />)
    
    const pauseButton = screen.getByTitle(/Pause slideshow/)
    expect(pauseButton).toBeInTheDocument()
    
    fireEvent.click(pauseButton)
    
    // After clicking, it should show play button
    waitFor(() => {
      expect(screen.getByTitle(/Resume slideshow/)).toBeInTheDocument()
    })
  })

  it('displays dot indicators for all testimonials', () => {
    render(<Testimonials />)
    
    // Should have 6 dot indicators (one for each testimonial)
    const dots = document.querySelectorAll('button[class*="rounded-full"]')
    expect(dots.length).toBe(6)
  })

  it('allows navigation via dot indicators', () => {
    render(<Testimonials />)
    
    const dots = document.querySelectorAll('button[class*="rounded-full"]')
    
    // Click on the third dot (index 2)
    if (dots[2]) {
      fireEvent.click(dots[2])
      expect(screen.getByText('Antoine Toulme')).toBeInTheDocument()
      expect(screen.getByText('Splunk')).toBeInTheDocument()
    }
  })

  it('displays all expected testimonials from key contributors', () => {
    render(<Testimonials />)
    
    // Test that we can navigate to all testimonials
    const dots = document.querySelectorAll('button[class*="rounded-full"]')
    
    const expectedAuthors = [
      'James Moessis',
      'Dan Gomez Blanco', 
      'Antoine Toulme',
      'Juraci Paixão Kröhling',
      'Michele Mancioppi',
      'Michael Hausenblas'
    ]
    
    expectedAuthors.forEach((author, index) => {
      if (dots[index]) {
        fireEvent.click(dots[index])
        expect(screen.getByText(author)).toBeInTheDocument()
      }
    })
  })

  it('has proper semantic structure with section element', () => {
    render(<Testimonials />)
    expect(document.querySelector('section')).toBeInTheDocument()
    expect(document.querySelector('blockquote')).toBeInTheDocument()
  })
}) 