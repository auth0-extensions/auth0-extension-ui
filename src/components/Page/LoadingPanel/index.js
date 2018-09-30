import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loader from 'react-loader-advanced';

class LoadingPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show || false
    };

    // Default styles.
    this.backgroundStyle = {
      padding: '5px',
      backgroundColor: 'rgba(255,255,255,0.8)',
      minHeight: '50px',
      ...this.props.backgroundStyle
    };
    this.spinnerStyle = {
      display: 'inline-block',
      height: '64px',
      width: '64px',
      margin: '0px auto',
      ...this.props.spinnerStyle
    };
    this.animationStyle = {
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingTop: '55px',
      paddingBottom: '55px',
      marginTop: '10px',
      marginBottom: '10px',
      ...this.props.animationStyle
    };
  }

  componentWillMount() {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
      this.stopLoading();
    } else if (!this.showTimer) {
      this.showTimer = setTimeout(this.startLoading, this.props.delay || 200);
    }
  }

  componentWillUnmount() {
    if (this.showTimer) {
      clearTimeout(this.showTimer);
    }
  }

  stopLoading = () => {
    this.setState({
      show: false
    });
  }

  startLoading = () => {
    this.setState({
      show: true
    });
  }

  render() {
    if (!this.state.show) {
      return <div>{this.props.children}</div>;
    }

    const animation = (<div className="spinner spinner-sm" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="circle" />
    </div>);

    return (<Loader show={this.state.show} message={animation} backgroundStyle={this.backgroundStyle}>
      {this.props.children}
    </Loader>);
  }
}

LoadingPanel.propTypes = {
  backgroundStyle: PropTypes.object,
  spinnerStyle: PropTypes.object,
  animationStyle: PropTypes.object,
  show: PropTypes.bool,
  delay: PropTypes.number,
  children: PropTypes.node
};

export default LoadingPanel;
