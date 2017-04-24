import React from 'react';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

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
      <ul className="languages">
        {
          languages.map(language => {
            const className = (language === this.state.selectedLanguage)? 'active': '';
            return (
              <li key={language}
                  className={className}
                  onClick={this.onLanguageClick.bind(null, language)}>{language}</li>
            )
          })
        }
      </ul>
    );
  }
}

export default Popular;
