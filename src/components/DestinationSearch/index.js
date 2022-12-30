// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchInputFiltered = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="destination-search-container">
        <h1 className="destination-heading">Destination search</h1>
        <div className="input-element-container">
          <input
            type="search"
            className="input-element"
            value={searchInput}
            placeholder="Search"
            onChange={this.searchDestination}
          />
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon-size"
            />
          </div>
        </div>
        <div className="unordered-list">
          <ul>
            {searchInputFiltered.map(eachItem => (
              <DestinationItem searchList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
