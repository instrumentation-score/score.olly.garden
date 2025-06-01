import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Audience } from './Audience'

describe('Audience Component', () => {
  it('renders without crashing', () => {
    render(<Audience />)
    expect(screen.getByText('Who Benefits from Instrumentation Score?')).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<Audience />)
    expect(screen.getByText('Who Benefits from Instrumentation Score?')).toBeInTheDocument()
  })

  it('renders both target audience cards', () => {
    render(<Audience />)
    expect(screen.getByText('Observability Platform Vendors')).toBeInTheDocument()
    expect(screen.getByText('Observability & Engineering Teams')).toBeInTheDocument()
  })

  it('displays vendor benefits correctly', () => {
    render(<Audience />)
    expect(screen.getByText(/Consistent Quality Assessment/)).toBeInTheDocument()
    expect(screen.getByText(/Customer Value/)).toBeInTheDocument()
    expect(screen.getByText(/Customer Advisory/)).toBeInTheDocument()
  })

  it('displays engineering team benefits correctly', () => {
    render(<Audience />)
    expect(screen.getByText(/Quality Assessment: Understand instrumentation/)).toBeInTheDocument()
    expect(screen.getByText(/Improvement Guidance/)).toBeInTheDocument()
    expect(screen.getByText(/Vendor Independence/)).toBeInTheDocument()
    expect(screen.getByText(/Team Communication/)).toBeInTheDocument()
  })

  it('includes community call-to-action section', () => {
    render(<Audience />)
    expect(screen.getByText('Join the Community')).toBeInTheDocument()
    expect(screen.getByText(/We encourage engineering teams to join/)).toBeInTheDocument()
  })

  it('displays community contribution benefits', () => {
    render(<Audience />)
    expect(screen.getByText(/Real-world Experience/)).toBeInTheDocument()
    expect(screen.getByText(/Rule Development/)).toBeInTheDocument()
    expect(screen.getByText(/Use Case Validation/)).toBeInTheDocument()
    expect(screen.getByText(/Community Growth/)).toBeInTheDocument()
  })

  it('includes instrumentation and observability terminology', () => {
    render(<Audience />)
    expect(screen.getAllByText(/instrumentation quality/).length).toBeGreaterThan(0)
    expect(screen.getByText(/observability platforms/)).toBeInTheDocument()
    expect(screen.getByText(/instrumentation best practices/)).toBeInTheDocument()
  })

  it('has proper semantic structure with section element', () => {
    render(<Audience />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
}) 