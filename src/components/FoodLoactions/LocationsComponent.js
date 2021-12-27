import RestaurantOneFinalComponent from "./RestaurantOne/RestaurantOneFinalComponent"
import RestaurantTwoFinalComponent from './RestaurantTwo/RestaurantTwoFinalComponent'
import RestaurantThreeFinalComponent from "./RestaurantThree/RestaurantThreeFinalComponent"


const LocationsComponent = () => {
    return (
        <div className="contain-locations">
            <RestaurantOneFinalComponent />
            <RestaurantTwoFinalComponent />
            <RestaurantThreeFinalComponent />
        </div>
    )
}

export default LocationsComponent
