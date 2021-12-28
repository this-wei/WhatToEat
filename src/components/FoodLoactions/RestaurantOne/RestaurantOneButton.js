import PropTypes from 'prop-types'

const RestaurantOneButton = ({color, text, onClick}) => {
    return (
        <div>
            <button 
            onClick={onClick} 
            style={{backgroundColor: color}}
            className = "btn">{text}</button>
        </div>
    )
}

RestaurantOneButton.defaultProps = {
    color: "red",
    text: "Favourites"

}

RestaurantOneButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default RestaurantOneButton
