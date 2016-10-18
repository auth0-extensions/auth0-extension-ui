import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';

class DragAndDrop extends Component {
  dropzoneStyle = {
    width: '100%',
    height: '150px',
    padding: '35px 20px 20px 20px',
    marginBottom: '20px',
    border: '2px dashed rgb(211, 211, 211)',
    borderRadius: '5px',
    fontSize: '28px',
    color: 'grey',
    textAlign: 'center'
  }

  render() {
    return (
      <Dropzone
        onDrop={this.props.onDrop}
        multiple={false}
        disablePreview
        style={this.dropzoneStyle}
      >
        <h3>Drop your file here, or click to select.</h3>
      </Dropzone>
    );
  }
}

DragAndDrop.propTypes = {
  onDrop: PropTypes.func.isRequired
};

export default DragAndDrop;
