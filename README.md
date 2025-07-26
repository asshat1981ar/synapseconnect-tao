# SynapseConnect TAO

An advanced AI-powered connectivity platform that enables seamless integration and orchestration of various systems, devices, and AI services.

## 🚀 Features

- **Modular Architecture**: Core system with pluggable modules for different functionalities
- **AI Integration**: Built-in support for advanced AI processing capabilities
- **Real-time Dashboard**: Modern web interface for monitoring and control
- **Configuration Management**: Environment-aware configuration system
- **Comprehensive Logging**: Multi-level logging with proper filtering
- **Testing & Quality**: Comprehensive test suite with coverage reporting

## 📋 Project Structure

```
synapseconnect-tao/
├── src/                    # Main application source code
│   ├── core/              # Core system components
│   ├── config/            # Configuration management
│   ├── utils/             # Utility functions
│   └── index.js           # Application entry point
├── dashboard/             # Web dashboard application
│   ├── src/               # Dashboard source code
│   ├── public/            # Static assets
│   └── dist/              # Built dashboard (generated)
├── tests/                 # Test files
└── coverage/              # Test coverage reports (generated)
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20.0.0 or higher
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asshat1981ar/synapseconnect-tao.git
   cd synapseconnect-tao
   ```

2. **Install main application dependencies**
   ```bash
   npm install
   ```

3. **Install dashboard dependencies**
   ```bash
   cd dashboard
   npm install
   cd ..
   ```

## 🏃‍♂️ Running the Application

### Main Application

```bash
# Start the application
npm start

# Development mode with auto-restart
npm run dev

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Dashboard

```bash
cd dashboard

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Development & Testing

The project includes comprehensive testing and quality assurance:

- **Unit Tests**: Jest-based testing with ES modules support
- **Code Coverage**: Detailed coverage reporting (target: >50%)
- **Linting**: ESLint with modern JavaScript standards
- **CI/CD**: GitHub Actions workflow for automated testing and deployment

### Test Coverage

Current test coverage:
- **Statements**: 67.1%
- **Branches**: 58.82%
- **Functions**: 83.33%
- **Lines**: 67.1%

## 🏗️ Architecture

### Core Components

- **SynapseCore**: Main system controller and orchestrator
- **ConfigManager**: Environment-aware configuration management
- **Logger**: Multi-level logging system with proper filtering
- **Dashboard**: Modern web interface for system monitoring

### Planned Modules

- **AI Engine**: Advanced AI processing capabilities
- **Connectivity Manager**: Network and device connectivity
- **Data Processor**: Real-time data processing pipeline
- **Security Manager**: Authentication and authorization

## 🚀 Deployment

The project is configured for automatic deployment:

1. **Main Application**: Tested and validated on every push
2. **Dashboard**: Built and deployed to GitHub Pages automatically
3. **CI/CD Pipeline**: 
   - Automated testing
   - Code quality checks
   - Coverage reporting
   - Production builds

## 📊 Dashboard Features

The web dashboard provides:

- **System Overview**: Real-time status and metrics
- **Module Management**: Monitor and control system modules
- **Connection Management**: Track active connections
- **Live Logs**: Real-time system log viewing
- **Settings**: Configurable dashboard preferences

Access the dashboard at: [https://asshat1981ar.github.io/synapseconnect-tao/](https://asshat1981ar.github.io/synapseconnect-tao/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔧 Configuration

The application supports environment-specific configuration:

- **Development**: Debug logging, development features enabled
- **Test**: Minimal logging, test-specific settings
- **Production**: Optimized performance, error-level logging

Environment variables:
- `NODE_ENV`: Environment (development/test/production)
- `PORT`: Application port (default: 3000)
- `LOG_LEVEL`: Logging level (ERROR/WARN/INFO/DEBUG)

## 📚 API Documentation

*Coming soon - API documentation will be available as the system develops.*

## ⚡ Performance

- **Startup Time**: < 1 second
- **Memory Usage**: Optimized for minimal footprint
- **Test Execution**: < 1 second for full test suite
- **Build Time**: < 30 seconds for dashboard

## 🔍 Monitoring

The system includes built-in monitoring:

- **Health Checks**: System status monitoring
- **Performance Metrics**: Resource usage tracking
- **Error Tracking**: Comprehensive error reporting
- **Audit Logs**: System activity logging

---

*SynapseConnect TAO - Connecting Intelligence, Orchestrating Possibilities*