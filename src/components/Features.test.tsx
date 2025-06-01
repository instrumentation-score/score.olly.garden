import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features Component', () => {
  it('renders without crashing', () => {
    render(<Features />)
    expect(screen.getByText('Why Instrumentation Score?')).toBeInTheDocument()
  })

  it('displays the main heading and description', () => {
    render(<Features />)
    expect(screen.getByText('Why Instrumentation Score?')).toBeInTheDocument()
    expect(screen.getByText(/Transform how your team approaches observability/)).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Objective Assessment')).toBeInTheDocument()
    expect(screen.getByText('Benchmarking & Trends')).toBeInTheDocument()
    expect(screen.getByText('Actionable Insights')).toBeInTheDocument()
    expect(screen.getByText('Common Vocabulary')).toBeInTheDocument()
    expect(screen.getByText('OTLP Data Analysis')).toBeInTheDocument()
    expect(screen.getByText('Industry Standards')).toBeInTheDocument()
  })

  it('displays objective assessment feature with correct description', () => {
    render(<Features />)
    expect(screen.getByText('Objective Assessment')).toBeInTheDocument()
    expect(screen.getByText(/Standardized scoring from 10-100/)).toBeInTheDocument()
  })

  it('includes OpenTelemetry references', () => {
    render(<Features />)
    expect(screen.getByText(/OpenTelemetry semantic conventions/)).toBeInTheDocument()
    expect(screen.getByText(/OpenTelemetry Protocol data streams/)).toBeInTheDocument()
    expect(screen.getByText(/established OpenTelemetry conventions/)).toBeInTheDocument()
  })

  it('shows the score categories', () => {
    render(<Features />)
    expect(screen.getByText(/Excellent \(90-100\)/)).toBeInTheDocument()
    expect(screen.getByText(/Good \(75-89\)/)).toBeInTheDocument()
    expect(screen.getByText(/Needs Improvement \(50-74\)/)).toBeInTheDocument()
    expect(screen.getByText(/Poor \(10-49\)/)).toBeInTheDocument()
  })

  it('has proper semantic structure with section element', () => {
    render(<Features />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
}) 