// Write your code here
import './index.css'

const DestinationItem = props => {
  const {searchList} = props
  const {name, imgUrl} = searchList

  return (
    <li className="search-list">
      <div className="flex-container">
        <div className="img-container">
          <img src={imgUrl} alt={name} className="img-size" />
        </div>
        <p className="para">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
