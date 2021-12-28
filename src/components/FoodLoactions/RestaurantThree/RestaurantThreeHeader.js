import PropTypes from 'prop-types'
import RestaurantThreeButton from './RestaurantThreeButton'

const RestaurantThreeHeader = ({title}) => {
    const onClick = () => { 
        console.log("Eating Here Rest 2")
        }

    return (
        <div className="header">
            <h2>{title}</h2>
            <RestaurantThreeButton color="black" text="Favourites" onClick={onClick}/>
        </div>
    )
}

RestaurantThreeHeader.defaultProps = {
    title: "Restaurant Three"
}

RestaurantThreeHeader.propTypes = {
    title: PropTypes.string

}

export default RestaurantThreeHeader
