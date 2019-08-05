export const config = {
    api: {
        url: 'http://rest-hotels-api.herokuapp.com',
        cities: {
            getCity: '/v1/cities',
        },
        hotels: {
            getHotel: '/v1/hotels',
            getHotelById: '/v1/hotels/{id}',
            getHotelByCity: '/v1/hotels?city={city}'
        }
    }
};
