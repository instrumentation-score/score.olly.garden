import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />)
    expect(screen.getByText('Instrumentation')).toBeInTheDocument()
  })

  it('displays the main heading with "Instrumentation Score"', () => {
    render(<Hero />)
    expect(screen.getByText('Instrumentation')).toBeInTheDocument()
    expect(screen.getByText('Score')).toBeInTheDocument()
  })

  it('shows the standardized metric description', () => {
    render(<Hero />)
    expect(screen.getByText(/standardized, vendor-neutral metric/i)).toBeInTheDocument()
    expect(screen.getByText(/OpenTelemetry instrumentation quality/i)).toBeInTheDocument()
  })

  it('displays score range information', () => {
    render(<Hero />)
    expect(screen.getByText('From 0 to 100.')).toBeInTheDocument()
    expect(screen.getByText('Objective. Actionable. Community-driven.')).toBeInTheDocument()
  })

  it('shows the score visualization with Poor and Excellent labels', () => {
    render(<Hero />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Poor')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Excellent')).toBeInTheDocument()
  })

  it('includes information about weighted scoring methodology', () => {
    render(<Hero />)
    expect(screen.getByText(/weighted scoring based on rule criticality/i)).toBeInTheDocument()
  })
}) 