import React from 'react';
import PropTypes from 'prop-types';

function SelectedLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {
        languages.map(language => {
          const className = (language === props.selected)? 'active': '';
          return (
            <li key={language}
                className={className}
                onClick={props.onSelect.bind(null, language)}>{language}</li>
          )
        })
      }
    </ul>
  )
}

SelectedLanguage.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.onLanguageClick = this.onLanguageClick.bind(this);
  }
  onLanguageClick(language) {
    this.setState(() => {
      return {
        selectedLanguage: language
      };
    })
  }
  render() {
    return (
      <div>
        <SelectedLanguage selected={this.state.selectedLanguage} onSelect={this.onLanguageClick} />
      </div>
    );
  }
}

export default Popular;
