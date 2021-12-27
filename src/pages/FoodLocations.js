import ImageComponent from "../components/FoodLoactions/ImageComponent"
import LocationsComponent from "../components/FoodLoactions/LocationsComponent"
import Navbar from "../components/Navbar/Navbar"

const FoodLocations = () => {
    return (
        <div>
            <Navbar />
            <LocationsComponent />
            <ImageComponent />
        </div>
    )
}

export default FoodLocations
