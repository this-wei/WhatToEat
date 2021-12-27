import PropTypes from 'prop-types'
import RestaurantOneButton from './RestaurantOneButton'
import {FaHeart} from 'react-icons/fa';

const RestaurantOneHeader = ({title}) => {
    const onClick = () => { 
        console.log("Eating Here Rest 1")
        }

    return (
        <div className="header">
            <h2>{title}</h2>
            <button className="favourite-icon"><FaHeart /></button>
            <RestaurantOneButton color="black" text="Favourites" onClick={onClick}/>
        </div>
    )
}

RestaurantOneHeader.defaultProps = {
    title: "Restaurant One"
}

RestaurantOneHeader.propTypes = {
    title: PropTypes.string

}

export default RestaurantOneHeader
