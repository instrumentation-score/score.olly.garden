# Instrumentation Score Website

> Web interface for the Instrumentation Score specification - available at [score.olly.garden](https://score.olly.garden)

This repository contains the **website and web application** for the Instrumentation Score project. For the **actual specification, rules, and detailed documentation**, please visit the main specification repository: **[instrumentation-score/spec](https://github.com/instrumentation-score/spec)**.

## What is the Instrumentation Score?

The **Instrumentation Score** is a standardized, vendor-neutral metric that quantifies the quality of OpenTelemetry instrumentation. Represented as a numerical value from **10 to 100**, it provides objective feedback on how well a service or system follows OpenTelemetry best practices and semantic conventions.

### Score Categories

| Score Range | Category              | Meaning                                    |
| ----------- | --------------------- | ------------------------------------------ |
| 90-100      | **Excellent**         | High standard of instrumentation quality   |
| 75-89       | **Good**              | Solid quality; minor improvements possible |
| 50-74       | **Needs Improvement** | Tangible issues requiring attention        |
| 10-49       | **Poor**              | Significant problems needing urgent action |

## 📋 Specification Resources

For the complete specification, rules, and documentation:

📖 **[Main Specification Repository](https://github.com/instrumentation-score/spec)** - Complete specification and rules  
📄 **[Full Specification](https://github.com/instrumentation-score/spec/blob/main/specification.md)** - Technical specification document  
📋 **[Rules Directory](https://github.com/instrumentation-score/spec/tree/main/rules)** - Complete set of scoring rules  
🔧 **[Contributing Guide](https://github.com/instrumentation-score/spec/blob/main/CONTRIBUTING.md)** - How to contribute to the specification  
🏛️ **[Governance](https://github.com/instrumentation-score/spec/blob/main/GOVERNANCE.md)** - Project governance and maintainers  

## 🌐 Website Development

This website provides an overview of the Instrumentation Score specification.

### Prerequisites

- Node.js & bun ([install bun](https://bun.sh/docs/installation))

### Getting Started

```sh
# Clone this repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd score.olly.garden

# Install dependencies
bun install

# Start development server
bun run dev
```

### Testing

This project includes comprehensive tests to ensure code quality and reliability:

```sh
# Run tests once
bun run test:run

# Run tests in watch mode
bun run test

# Run tests with UI
bun run test:ui

# Run tests with coverage report
bun run coverage
```

### Continuous Integration

This project uses GitHub Actions for automated testing and deployment:

- **CI Workflow** (`ci.yml`): Runs on every push and PR
  - Tests on Node.js 20
  - Linting and type checking
  - Build verification
  - Bundle size analysis

All PRs must pass CI checks before merging.

### Technologies Used

This website is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn-ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Bun** - Fast JavaScript runtime and package manager

## 🚀 Deployment

This website is deployed at **[score.olly.garden](https://score.olly.garden)** using **Netlify**.

To deploy updates:

1. **Automatic deployment**: Pushes to the main branch trigger automatic deployments via Netlify
2. **Manual deployment**: Use `bun run build` to build the project locally

## 🤝 Community

### Get Involved

We welcome contributions from the OpenTelemetry community!

- 💬 **Join Discussion**: [CNCF Slack #instrumentation-score](https://cloud-native.slack.com/archives/C08U9NN1XBR)
- 🐛 **Report Issues**: 
  - **Specification Issues**: [instrumentation-score/spec Issues](https://github.com/instrumentation-score/spec/issues)
  - **Website Issues**: [This repository's issues]
- 🔀 **Submit Changes**: 
  - **Specification Changes**: Follow the [spec contributing guide](https://github.com/instrumentation-score/spec/blob/main/CONTRIBUTING.md)
  - **Website Changes**: Submit PRs to this repository
- 📅 **Attend Meetings**: Community meetings (schedule in Slack)

### Maintainers

- [Antoine Toulme](https://github.com/atoulme) (@atoulme), Splunk
- [Daniel Gomez Blanco](https://github.com/danielgblanco) (@danielgblanco), New Relic
- [Juraci Paixão Kröhling](https://github.com/jpkrohling) (@jpkrohling), OllyGarden
- [Michele Mancioppi](https://github.com/mmanciop) (@mmanciop), Dash0

## 📜 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/instrumentation-score/spec/blob/main/LICENSE) file for details.

---

**🔗 Links:**
- **Website**: [score.olly.garden](https://score.olly.garden)
- **Specification**: [github.com/instrumentation-score/spec](https://github.com/instrumentation-score/spec)
- **Community**: [CNCF Slack #instrumentation-score](https://cloud-native.slack.com/archives/C08U9NN1XBR)
