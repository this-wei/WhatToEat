import RestaurantOneInfo from './RestaurantOneInfo';
import PropTypes from 'prop-types'

const RestaurantOneBody = ({description}) => {

    return (
        <div>
            <p>{description}</p>
            <RestaurantOneInfo />
        </div>
    )
}

RestaurantOneBody.defaultProps = {
    description: "405 85st SW"
}

RestaurantOneBody.propTypes = {
    description: PropTypes.string

}
export default RestaurantOneBody
