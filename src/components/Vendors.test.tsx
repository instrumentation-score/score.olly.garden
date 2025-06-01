import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Vendors } from './Vendors'

describe('Vendors Component', () => {
  it('renders without crashing', () => {
    render(<Vendors />)
    expect(screen.getByText('Supported by Leading Vendors')).toBeInTheDocument()
  })

  it('displays the main heading and description', () => {
    render(<Vendors />)
    expect(screen.getByText('Supported by Leading Vendors')).toBeInTheDocument()
    expect(screen.getByText(/The Instrumentation Score specification is backed/)).toBeInTheDocument()
  })

  it('renders all vendor names', () => {
    render(<Vendors />)
    expect(screen.getByText('OllyGarden')).toBeInTheDocument()
    expect(screen.getByText('Dash0')).toBeInTheDocument()
    expect(screen.getByText('Datadog')).toBeInTheDocument()
    expect(screen.getByText('New Relic')).toBeInTheDocument()
    expect(screen.getByText('Splunk')).toBeInTheDocument()
  })

  it('shows future expansion message', () => {
    render(<Vendors />)
    expect(screen.getByText('And many more joining the initiative')).toBeInTheDocument()
  })

  it('includes observability and OpenTelemetry messaging', () => {
    render(<Vendors />)
    expect(screen.getByText(/observability and monitoring vendors/)).toBeInTheDocument()
    expect(screen.getByText(/OpenTelemetry instrumentation quality/)).toBeInTheDocument()
  })

  it('has proper semantic structure with section element', () => {
    render(<Vendors />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('displays animated loading dots', () => {
    render(<Vendors />)
    const animatedDots = document.querySelectorAll('.animate-pulse')
    expect(animatedDots.length).toBeGreaterThan(0)
  })
}) 