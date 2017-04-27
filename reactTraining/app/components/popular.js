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

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {
        props.repos.map((repo, index) => {
          return (
            <li key={repo.name} className='popular-item'>
              <div className='popular-rank'>#{index + 1}</div>
              <ul className="space-list-items">
                <li><img src={repo.owner.avatar_url} className='avatar' alt={`Avatar for ${repo.owner.login}`}/></li>
                <li><a href={repo.html_url} className="popular-item-link">{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          );
        })
      }
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

class Popular extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
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
  render() {
    return (
      <div>
        <SelectedLanguage selected={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {!this.state.repos ?
          <p>LOADING</p> :
          <RepoGrid repos={this.state.repos} />
        }
      </div>
    );
  }
}

export default Popular;
