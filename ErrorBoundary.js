import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500 p-4">Something went wrong while rendering the table.</div>;
    }
    return this.props.children; // Should no longer show warning with PropTypes
  }
}

// Define prop types
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // 'node' allows any renderable content, 'isRequired' ensures children are provided
};

export default ErrorBoundary;