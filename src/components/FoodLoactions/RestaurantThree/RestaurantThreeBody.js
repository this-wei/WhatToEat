import RestaurantThreeInfo from './RestaurantThreeInfo';
import PropTypes from 'prop-types'

const RestaurantThreeBody = ({description}) => {

    return (
        <div>
            <p>{description}</p>
            <RestaurantThreeInfo />
        </div>
    )
}

RestaurantThreeBody.defaultProps = {
    description: "405 85st SW"
}

RestaurantThreeBody.propTypes = {
    description: PropTypes.string

}
export default RestaurantThreeBody
