/**
 * SynapseConnect TAO Dashboard Application
 */

export class DashboardApp {
  constructor() {
    this.container = null;
    this.systemStatus = {
      connected: false,
      modules: {},
      lastUpdate: null
    };
  }

  mount(container) {
    this.container = container;
    this.render();
    this.startStatusUpdates();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="dashboard">
        <header class="dashboard-header">
          <h1>SynapseConnect TAO</h1>
          <div class="status-indicator ${this.systemStatus.connected ? 'connected' : 'disconnected'}">
            ${this.systemStatus.connected ? '🟢 Connected' : '🔴 Disconnected'}
          </div>
        </header>

        <nav class="dashboard-nav">
          <button class="nav-btn active" data-section="overview">Overview</button>
          <button class="nav-btn" data-section="modules">Modules</button>
          <button class="nav-btn" data-section="connections">Connections</button>
          <button class="nav-btn" data-section="logs">Logs</button>
          <button class="nav-btn" data-section="settings">Settings</button>
        </nav>

        <main class="dashboard-content">
          <div id="overview-section" class="content-section active">
            ${this.renderOverview()}
          </div>
          <div id="modules-section" class="content-section">
            ${this.renderModules()}
          </div>
          <div id="connections-section" class="content-section">
            ${this.renderConnections()}
          </div>
          <div id="logs-section" class="content-section">
            ${this.renderLogs()}
          </div>
          <div id="settings-section" class="content-section">
            ${this.renderSettings()}
          </div>
        </main>

        <footer class="dashboard-footer">
          <div class="footer-info">
            <span>SynapseConnect TAO v1.0.0</span>
            <span>Last Update: ${this.systemStatus.lastUpdate || 'Never'}</span>
          </div>
        </footer>
      </div>
    `;

    this.attachEventListeners();
  }

  renderOverview() {
    return `
      <div class="overview-grid">
        <div class="metric-card">
          <h3>System Status</h3>
          <div class="metric-value ${this.systemStatus.connected ? 'success' : 'error'}">
            ${this.systemStatus.connected ? 'Online' : 'Offline'}
          </div>
        </div>
        <div class="metric-card">
          <h3>Active Modules</h3>
          <div class="metric-value">${Object.keys(this.systemStatus.modules).length}</div>
        </div>
        <div class="metric-card">
          <h3>Connections</h3>
          <div class="metric-value">0</div>
        </div>
        <div class="metric-card">
          <h3>AI Processes</h3>
          <div class="metric-value">0</div>
        </div>
      </div>
      <div class="system-info">
        <h3>System Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <label>Environment:</label>
            <span>Development</span>
          </div>
          <div class="info-item">
            <label>Node Version:</label>
            <span>${navigator.userAgent}</span>
          </div>
          <div class="info-item">
            <label>Platform:</label>
            <span>${navigator.platform}</span>
          </div>
        </div>
      </div>
    `;
  }

  renderModules() {
    return `
      <div class="modules-container">
        <h3>System Modules</h3>
        <div class="modules-grid">
          <div class="module-card">
            <h4>SynapseCore</h4>
            <div class="module-status active">Active</div>
            <p>Main system controller and orchestrator</p>
          </div>
          <div class="module-card">
            <h4>ConfigManager</h4>
            <div class="module-status active">Active</div>
            <p>Configuration management system</p>
          </div>
          <div class="module-card">
            <h4>Logger</h4>
            <div class="module-status active">Active</div>
            <p>System logging and monitoring</p>
          </div>
          <div class="module-card pending">
            <h4>AI Engine</h4>
            <div class="module-status pending">Pending</div>
            <p>Advanced AI processing capabilities</p>
          </div>
          <div class="module-card pending">
            <h4>Connectivity Manager</h4>
            <div class="module-status pending">Pending</div>
            <p>Network and device connectivity</p>
          </div>
        </div>
      </div>
    `;
  }

  renderConnections() {
    return `
      <div class="connections-container">
        <h3>Active Connections</h3>
        <div class="connections-list">
          <div class="empty-state">
            <h4>No Active Connections</h4>
            <p>The system is currently not connected to any external services or devices.</p>
            <button class="btn-primary">Add Connection</button>
          </div>
        </div>
      </div>
    `;
  }

  renderLogs() {
    return `
      <div class="logs-container">
        <h3>System Logs</h3>
        <div class="logs-controls">
          <select class="log-level-filter">
            <option value="all">All Levels</option>
            <option value="error">Error</option>
            <option value="warn">Warning</option>
            <option value="info">Info</option>
            <option value="debug">Debug</option>
          </select>
          <button class="btn-secondary">Clear Logs</button>
        </div>
        <div class="logs-display">
          <div class="log-entry info">
            <span class="log-time">2025-07-26 14:21:25</span>
            <span class="log-level">INFO</span>
            <span class="log-context">Main</span>
            <span class="log-message">SynapseConnect TAO initialized successfully</span>
          </div>
          <div class="log-entry info">
            <span class="log-time">2025-07-26 14:21:25</span>
            <span class="log-level">INFO</span>
            <span class="log-context">SynapseCore</span>
            <span class="log-message">SynapseCore initialization complete</span>
          </div>
        </div>
      </div>
    `;
  }

  renderSettings() {
    return `
      <div class="settings-container">
        <h3>Dashboard Settings</h3>
        <div class="settings-grid">
          <div class="setting-group">
            <h4>Display</h4>
            <div class="setting-item">
              <label>Theme:</label>
              <select>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div class="setting-item">
              <label>Update Interval:</label>
              <select>
                <option value="1000">1 second</option>
                <option value="5000">5 seconds</option>
                <option value="10000">10 seconds</option>
              </select>
            </div>
          </div>
          <div class="setting-group">
            <h4>Notifications</h4>
            <div class="setting-item">
              <label>
                <input type="checkbox" checked> System alerts
              </label>
            </div>
            <div class="setting-item">
              <label>
                <input type="checkbox" checked> Connection changes
              </label>
            </div>
            <div class="setting-item">
              <label>
                <input type="checkbox"> Debug messages
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Navigation
    const navButtons = this.container.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const section = e.target.dataset.section;
        this.switchSection(section);
      });
    });
  }

  switchSection(sectionName) {
    // Remove active class from all nav buttons and sections
    this.container.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    this.container.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));

    // Add active class to current nav button and section
    this.container.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    this.container.querySelector(`#${sectionName}-section`).classList.add('active');
  }

  startStatusUpdates() {
    // Simulate connection status updates
    setTimeout(() => {
      this.systemStatus.connected = true;
      this.systemStatus.lastUpdate = new Date().toLocaleString();
      this.systemStatus.modules = {
        'SynapseCore': 'active',
        'ConfigManager': 'active',
        'Logger': 'active'
      };
      this.render();
    }, 2000);

    // Set up periodic updates
    setInterval(() => {
      this.systemStatus.lastUpdate = new Date().toLocaleString();
      this.updateStatusDisplay();
    }, 5000);
  }

  updateStatusDisplay() {
    const statusIndicator = this.container.querySelector('.status-indicator');
    const lastUpdateSpan = this.container.querySelector('.footer-info span:last-child');

    if (statusIndicator) {
      statusIndicator.className = `status-indicator ${this.systemStatus.connected ? 'connected' : 'disconnected'}`;
      statusIndicator.textContent = this.systemStatus.connected ? '🟢 Connected' : '🔴 Disconnected';
    }

    if (lastUpdateSpan) {
      lastUpdateSpan.textContent = `Last Update: ${this.systemStatus.lastUpdate}`;
    }
  }
}