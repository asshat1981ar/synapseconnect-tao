/**
 * SynapseConnect TAO Dashboard - Main Entry Point
 */

import './style.css';
import { DashboardApp } from './dashboard-app.js';

const app = new DashboardApp();

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('#app');
  if (appContainer) {
    app.mount(appContainer);
  } else {
    console.error('App container not found');
  }
});