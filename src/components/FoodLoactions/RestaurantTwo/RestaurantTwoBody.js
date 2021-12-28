import RestaurantTwoInfo from './RestaurantTwoInfo';
import PropTypes from 'prop-types'

const RestaurantTwoBody = ({description}) => {

    return (
        <div>
            <p>{description}</p>
            <RestaurantTwoInfo />
        </div>
    )
}

RestaurantTwoBody.defaultProps = {
    description: "405 85st SW"
}

RestaurantTwoBody.propTypes = {
    description: PropTypes.string

}
export default RestaurantTwoBody
