
const convert = response => {

    let restaurantList = [];
    let restaurant;

    let responseRestaurantList = response.data.restaurants;
    responseRestaurantList.map((responseRestaurant) => {
        let restaurantData = responseRestaurant.restaurant;
        restaurant = {};
        restaurant.id = restaurantData.id;
        restaurant.cuisines = restaurantData.cuisines;
        restaurant.imageURL = restaurantData.thumb;
        restaurant.location = restaurantData.location.locality_verbose;
        restaurant.name = restaurantData.name;
        restaurant.rating = restaurantData.user_rating.aggregate_rating;

        restaurantList.push(restaurant);
    });

    return restaurantList;

};

export default {
    convert,
};
