import PropTypes from 'prop-types'

const RestaurantThreeButton = ({color, text, onClick}) => {
    return (
        <div>
            <button 
            onClick={onClick} 
            style={{backgroundColor: color}}
            className = "btn">{text}</button>
        </div>
    )
}

RestaurantThreeButton.defaultProps = {
    color: "steel",
    text: "Favourite"

}

RestaurantThreeButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default RestaurantThreeButton
