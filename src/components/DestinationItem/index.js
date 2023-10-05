import './index.css'

const DestinationItem = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations
  return (
    <li className="list-container">
      <img src={imgUrl} className="destination-img" alt={name} />
      <div className="destination-name-container">
        <p className="destination-name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
