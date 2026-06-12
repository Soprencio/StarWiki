import React, { Component } from 'react';
import ErrorState from './feedback/ErrorState';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("HoloNet System Failure:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{ padding: '2rem' }}>
          <ErrorState 
            message="Se ha detectado una anomalía crítica en el flujo de datos. La transmisión ha sido interrumpida por seguridad." 
            onRetry={() => window.location.reload()} 
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
