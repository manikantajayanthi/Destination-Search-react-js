import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestinationSearch =>
      eachDestinationSearch.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="list-container">
        <div className="search-container">
          <h1 className="search-heading">Destination Search</h1>
          <div className="container">
            <input
              type="search"
              className="input"
              value={searchInput}
              onChange={this.onChangeSearch}
              placeholder="search"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
        </div>
        <ul className="list-alignment">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinations={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
