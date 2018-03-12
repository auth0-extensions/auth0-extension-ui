import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  static defaultProps = {
    resetButtonText: 'Reset',
    inputId: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.searchOptions.find(opt => opt.selected) || this.props.searchOptions[0],
      searchValue: this.props.searchValue
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedOption: this.props.searchOptions.find(opt => opt.value === event.target.value)
    }, () => {
      if (this.props.handleOptionChange) {
        this.props.handleOptionChange(this.state.selectedOption);
      }
    });
  }

  handleSearchValueChange = (ev) => {
    this.setState({
      searchValue: ev.target.value
    }, () => {
      if (this.props.handleInputChange) {
        this.props.handleInputChange(this.state.searchValue);
      }
    });
  };

  renderInstructions = () => {
    if (this.props.instructionsText) {
      return (
        <div className="col-xs-12 help-block">{this.props.instructionsText}</div>
      );
    }

    return (
      <div className="col-xs-12 help-block">
        To perform your search, press <span className="keyboard-button">enter</span>.
        You can also search for specific fields, eg: <strong>email:"john@doe.com"</strong>.
      </div>
    );
  };

  render() {
    const { placeholder, iconCode, searchOptions, handleKeyPress, handleReset, showInstructions, inputId } = this.props;
    return (
      <div>
        <form className="advanced-search-control">
          <span className="search-area">
            <i className={iconCode ? `icon-budicon-${iconCode}` : 'icon-budicon-489'} />
            <input
              className="user-input" type="text" placeholder={placeholder || 'Search'}
              spellCheck="false" style={{ marginLeft: '10px' }} onKeyPress={handleKeyPress}
              value={this.state.searchValue} onChange={this.handleSearchValueChange} id={inputId}
            />
          </span>

          <span className="controls pull-right">
            { searchOptions ? (
              <div className="js-select custom-select">
                <span>Search by </span><span className="truncate" data-select-value>{this.state.selectedOption.title}</span> <i className="icon-budicon-460" />
                <select
                  data-mode
                  value={this.state.selectedOption.value}
                  onChange={this.handleChange}
                >
                  { searchOptions.map((opt) => (<option key={opt.title} value={opt.value}>{opt.title}</option>)) }
                </select>
              </div>
            ) : null }
            { handleReset && <button type="reset" style={{ marginLeft: 0 }} onClick={handleReset}>{this.props.resetButtonText} <i className="icon-budicon-471" /></button> }
          </span>
        </form>
        { showInstructions && this.renderInstructions()}
      </div>
    );
  }
}

SearchBar.propTypes = {
  inputId: PropTypes.string,
  placeholder: PropTypes.string,
  iconCode: PropTypes.number,
  searchOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  searchValue: PropTypes.string,
  handleKeyPress: PropTypes.func,
  handleReset: PropTypes.func,
  handleOptionChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  showInstructions: PropTypes.bool,
  instructionsText: PropTypes.string,
  resetButtonText: PropTypes.string
};

export default SearchBar;
