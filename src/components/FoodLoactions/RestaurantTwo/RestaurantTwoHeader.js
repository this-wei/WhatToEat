import PropTypes from 'prop-types'
import RestaurantTwoButton from './RestaurantTwoButton'

const RestaurantTwoHeader = ({title}) => {
    const onClick = () => { 
        console.log("Eating Here Rest 2")
        }

    return (
        <div className="header">
            <h2>{title}</h2>
            <RestaurantTwoButton color="black" text="Favourites" onClick={onClick}/>
        </div>
    )
}

RestaurantTwoHeader.defaultProps = {
    title: "Restaurant Two"
}

RestaurantTwoHeader.propTypes = {
    title: PropTypes.string

}

export default RestaurantTwoHeader
