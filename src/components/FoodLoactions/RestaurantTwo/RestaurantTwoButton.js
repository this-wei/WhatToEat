import PropTypes from 'prop-types'

const RestaurantTwoButton = ({color, text, onClick}) => {
    return (
        <div>
            <button 
            onClick={onClick} 
            style={{backgroundColor: color}}
            className = "btn">{text}</button>
        </div>
    )
}

RestaurantTwoButton.defaultProps = {
    color: "steel",
    text: "Favourite"

}

RestaurantTwoButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default RestaurantTwoButton
