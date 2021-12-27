import PropTypes from 'prop-types'

const RestaurantThreeInfo = ({cuisine, price, number, rating}) => {
    return (
        <div>
            <ul className="restaurant-info">
                <li>{rating}</li>
                <li>{price}</li>
                <li>{number}</li>
                <li>{cuisine}</li>
            </ul>
        </div>
    )
}

RestaurantThreeInfo.defaultProps = {
    cuisine: "Fast Food",
    price: "$$",
    number: "(780)-123-4567",
    rating: "4.5/5"
  }

  RestaurantThreeInfo.propTypes = {
    cuisine: PropTypes.string,
    price: PropTypes.string,
    number: PropTypes.string,
    rating: PropTypes.string

}

export default RestaurantThreeInfo