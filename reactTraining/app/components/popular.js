import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';

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
      selectedLanguage: 'All',
      repos: [],
    };
    this.updateLanguage = this.updateLanguage.bind(this);
    this.displayRepos = this.displayRepos.bind(this);
  }
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(language) {
    this.setState(() => {
      return {
        selectedLanguage: language
      };
    });

    fetchPopularRepos(language).then((repos) => {
      this.setState(() => {
        return {
          repos
        }
      });
    });
  }
  displayRepos() {
    return this.state.repos.map((repo, index) => {
      return <li key={index}>{repo.git_url}</li>
    });
  }
  render() {
    return (
      <div>
        <SelectedLanguage selected={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {this.displayRepos()}
      </div>
    );
  }
}

export default Popular;
