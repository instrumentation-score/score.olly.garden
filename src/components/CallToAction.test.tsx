import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { CallToAction } from './CallToAction'

// Mock window.open
const mockWindowOpen = vi.fn()
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
})

describe('CallToAction Component', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear()
  })

  it('renders without crashing', () => {
    render(<CallToAction />)
    expect(screen.getByText(/Ready to Improve Your/)).toBeInTheDocument()
  })

  it('displays the main heading and call-to-action', () => {
    render(<CallToAction />)
    expect(screen.getByText(/Ready to Improve Your/)).toBeInTheDocument()
    expect(screen.getByText(/Observability?/)).toBeInTheDocument()
    expect(screen.getByText(/Join the growing community/)).toBeInTheDocument()
  })

  it('renders all three action cards', () => {
    render(<CallToAction />)
    expect(screen.getByText('Explore the Specification')).toBeInTheDocument()
    expect(screen.getByText('Read the Specification')).toBeInTheDocument()
    expect(screen.getByText('Join the Community')).toBeInTheDocument()
  })

  it('has working GitHub specification button', () => {
    render(<CallToAction />)
    const githubButton = screen.getByText('View on GitHub')
    fireEvent.click(githubButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://github.com/instrumentation-score/spec', '_blank')
  })

  it('has working specification document button', () => {
    render(<CallToAction />)
    const specButton = screen.getByText('Read Specification')
    fireEvent.click(specButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://github.com/instrumentation-score/spec/blob/main/specification.md', '_blank')
  })

  it('has working CNCF Slack button', () => {
    render(<CallToAction />)
    const slackButton = screen.getByText('Join CNCF Slack')
    fireEvent.click(slackButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://cloud-native.slack.com/archives/C08U9NN1XBR', '_blank')
  })

  it('has main get started button', () => {
    render(<CallToAction />)
    const getStartedButton = screen.getByText('Get Started Today')
    fireEvent.click(getStartedButton)
    expect(mockWindowOpen).toHaveBeenCalledWith('https://github.com/instrumentation-score/spec', '_blank')
  })

  it('shows free and open source messaging', () => {
    render(<CallToAction />)
    expect(screen.getByText('Free and open source • No vendor lock-in')).toBeInTheDocument()
  })

  it('includes OpenTelemetry and CNCF references', () => {
    render(<CallToAction />)
    expect(screen.getByText(/OpenTelemetry implementations/)).toBeInTheDocument()
    expect(screen.getByText(/CNCF Slack workspace/)).toBeInTheDocument()
  })
}) 